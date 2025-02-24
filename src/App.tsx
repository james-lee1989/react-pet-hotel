import React from "react";
import { Router, Route, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthContextProvider from "./contexts/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path="/">
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </Route>
            <Route path="/login">
              <ProtectedRoute>
                <LoginPage />
              </ProtectedRoute>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
