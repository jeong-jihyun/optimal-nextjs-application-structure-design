"use client";

import React from "react";

const CounterContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  );
}

// Ensure this function is only used in client-side components
export function useCounter() {
  if (typeof window === "undefined") {
    throw new Error("useCounter must be called in a client-side component");
  }

  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
