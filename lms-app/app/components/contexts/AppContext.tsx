"use client";

import { createContext, ReactNode, useContext } from "react";

// Define types for our context
interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: "student" | "educator";
}

interface AppContextType {
  user: User | null;
}

// Create context with type safety
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Props interface
interface AppProviderProps {
  children: ReactNode;
}
// Provider component
export function AppProvider({ children }: AppProviderProps) {
  const value = {
    user: null,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook for using this context
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
