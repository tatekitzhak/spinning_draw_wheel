import React from 'react';
import { Link } from 'react-router'
import useKeycloak from '../keycloakContext/useKeycloak';

interface LoginButtonProps {
}

export default function LoginButton({ }: LoginButtonProps) {
  const { keycloak, authenticated } = useKeycloak();

  const handleLogin = () => {
    console.log("NavBar keycloak:", keycloak)
    console.log("NavBar authenticated:", authenticated)
    keycloak?.login();
  };

  const handleLogout = () => {
    keycloak?.logout();
  };

  return (
    <div className="flex flex-col h-full gap-6">

      <div>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Keycloak POC
        </Link>
      </div>
      {authenticated ? (
        <>
          <button color="inherit" component={Link} to="/my-account">
            My Account
          </button>
          <button color="inherit" component={Link} to="/my-items">
            My Items
          </button>
          <button color="inherit" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={handleLogin} className=" py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors  items-center justify-center gap-2">
          {/* <Share2 size={20} className="text-gray-600" /> */}

          {/* <LogIn color="blue" size={48} strokeWidth={1.5} /> */}
          {/* <LogIn size={20} /> */}
          <span>Login</span>
        </button>
      )}


    </div>
  );
}
