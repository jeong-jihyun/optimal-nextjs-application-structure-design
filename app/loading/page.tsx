import { ExternalLink } from "../../ui/external-link";
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
export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">
        로딩 상태를 보여주는 즉각적인 UI: loading.js
      </h1>
      <ul>
        <li>데이터를 가져오는 동안 지연 발생시, 로딩 UI를 보여줌</li>
        <li>로딩 중에도 클라잉너트에서 클릭 등 사용자 상호 작용 가능</li>
        <li>로딩 중 다른 페이지로 내비게이션 가능</li>
      </ul>
      <div>
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">문서s</ExternalLink>
      </div>
    </div>
  );
}
