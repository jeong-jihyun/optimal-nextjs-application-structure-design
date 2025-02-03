import { Metadata } from "next";
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
export const metadata: Metadata = {
  title: "레벨업 Next.js: 라우트 그룹",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
