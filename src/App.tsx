import { BrowserRouter, Routes, Route } from 'react-router'
import { KeycloakProvider } from './keycloakContext/KeycloakContext'

import Layout from './components/Layout/Layout'
import ErrorBoundary from './keycloakContext/ErrorBoundary'

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
          </Routes>

        </BrowserRouter>
      </KeycloakProvider>
    {/* </ErrorBoundary> */}
    </>
  )
}

export default App
