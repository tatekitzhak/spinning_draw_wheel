import React, { createContext, useRef, useEffect, useState, useMemo } from 'react';
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';

interface KeycloakContextState {
  keycloak: Keycloak | null;
  authenticated: boolean;
  isInitialized: boolean;
}

const KeycloakContext = createContext<KeycloakContextState | undefined>(undefined);

interface KeycloakProviderProps {
  children?: React.ReactNode;
}

 const KeycloakProvider = ({ children }: KeycloakProviderProps) => {
  const isInitialized = useRef(false);
  
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  console.log("KeycloakProvider1:", isInitialized)
    // Prevent double-init in React Strict Mode
    if (isInitialized.current) {
        console.log("KeycloakProvider2:", isInitialized)
        return;
    }
    isInitialized.current = true;

    const KeycloakParams: KeycloakConfig = {
      url: 'https://localhost:8443/',
      realm: 'webapp',
      clientId: 'public_client_webapp_id',
    };

    const initOptions: KeycloakInitOptions = {
      // onLoad: 'check-sso', // Tries to see if a session exists in the background. If it fails to find the server, it can still cause a hang or a redirect loop if not handled correctly.
      // onLoad: 'login-required',  //Forces a redirect to the Keycloak login page immediately if the user isn't authenticated.
      onLoad: undefined, // Don't force a check on page load or use 'check-sso' but wrap it in a try/catch
      pkceMethod: 'S256',
      checkLoginIframe: false,
    };

    const keycloakInstance = new Keycloak(KeycloakParams);

    const initKeycloak = async () => {
      try {
        const auth = await keycloakInstance.init(initOptions);
        setKeycloak(keycloakInstance);
        setAuthenticated(auth);
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
      } finally {
        setLoading(false);
      }
    };

    initKeycloak();
  }, []);

  // Memoize the value to optimize performance
  const contextValue = useMemo(() => ({
    keycloak,
    authenticated,
    isInitialized: !loading
  }), [keycloak, authenticated, loading]);

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export { KeycloakProvider, KeycloakContext }
