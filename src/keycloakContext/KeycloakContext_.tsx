import React, { createContext, useRef, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';


interface KeycloakContextProps {
  keycloak: Keycloak | null
  authenticated: boolean
}
const KeycloakContext = createContext<KeycloakContextProps | undefined>(undefined,)



interface KeycloakProviderProps {
  children: React.ReactNode
}

const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  const isRun = useRef<boolean>(false)
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null)
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    if (isRun.current) return

    isRun.current = true

      const keycloackConfig = {
        url: 'https://localhost:8443/',
        realm: 'themelinx',
        clientId: 'public-client-web-application-id',
      }
      const keycloakInstance: Keycloak = new Keycloak(keycloackConfig)

      keycloakInstance
        .init({
          onLoad: 'check-sso',
          pkceMethod: 'S256', // Recommended for public clients
          checkLoginIframe: false
        })
        .then((authenticated: boolean) => {
          console.log('Keycloak init:',authenticated);
          setAuthenticated(authenticated)
        })
        .catch((error) => {
          console.error('Keycloak initialization failed:', error)
          setAuthenticated(false)
        })
        .finally(() => {
          setKeycloak(keycloakInstance)
          console.log('keycloak:', keycloakInstance)
        })

  }, [])

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  )
}

export { KeycloakProvider, KeycloakContext }
