import { Boundary } from "../../ui/boundary";
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
export default function NotFound() {
  return (
    <Boundary label={["./not-found.tsx"]} color="pink">
      <div className="space-y-4 text-vercel-pink">
        <h2 className="text-lg font-bold">페이지 없음(Not Found)</h2>
        <p className="text-sm">요청한 리소스를 찾을 수 없습니다.</p>
      </div>
    </Boundary>
  );
}
