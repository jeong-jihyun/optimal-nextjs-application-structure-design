"use client";
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
import { usePathname } from "next/navigation";

export function CurrentRoute({ slice = 2 }: { slice?: number }) {
  const pathname = usePathname();

  return <>{pathname?.split("/").slice(slice).join("/")}</>;
}
