"use client";

import React from "react";
import { Boundary } from "../../ui/boundary";
import Button from "../../ui/button";
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
interface ErrorProps {
  error: { message: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    console.log("logging error : ", error);
  }, [error]);

  return (
    <Boundary label={["./[categorySlug]/error.tsx"]} color="pink">
      <div className="space-y-4">
        <h2 className="text-lg font-bold">에러발생</h2>
        <p className="text-sm">{error?.message}</p>
        <div>
          <Button onClick={() => reset()}>재시도하기</Button>
        </div>
      </div>
    </Boundary>
  );
}
