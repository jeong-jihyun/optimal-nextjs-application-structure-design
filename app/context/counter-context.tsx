"use client";

import React from "react";
/**
 * <pre>
 * </pre>
 *
 * @author jeongjihyun
 * @since 2025-02-03
 * @version 1.0
 * @Modification
 * <pre>
 *     since          author              description
 *  ===========    =============    ===========================
 *  2025-02-03     jeongjihyun      최초 생성
 *
 * </pre>
 */
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

// 클라이언트 컴포넌트는 서버에서도 한 번 렌더링되므로 window 검사는 하지 않는다.
export function useCounter() {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
