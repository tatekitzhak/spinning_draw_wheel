import { BrowserRouter, Routes, Route } from 'react-router';
import { KeycloakProvider } from './authKeycloakProvider/KeycloakContext';

import Layout from './components/Layout/Layout';
import ErrorBoundary from './authKeycloakProvider/ErrorBoundary';

interface HealthCheckPgeProps {
  HealthCheck: string[];
  setHealthCheck?: (healthCheck: string[]) => void;
  
}

const HealthCheckPge = ({HealthCheck, setHealthCheck}: HealthCheckPgeProps) => {
  return (
    <>
      status: 200
      <br />
      environment: 
    </>
  )
}

function App() {
  return (
    <>
    {/* <ErrorBoundary> */}
      <KeycloakProvider>
        <BrowserRouter>

          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                </Layout>
              }
            />
            <Route path="/react_health" 
                  element={<HealthCheckPge HealthCheck={[]}
                                        
                                        />} 
            />

          </Routes>

        </BrowserRouter>
      </KeycloakProvider>
    {/* </ErrorBoundary> */}
    </>
  )
}

export default App
