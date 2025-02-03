import { ExternalLink } from "../../ui/external-link";

/**
 * <pre>
 * 서스펜스를 스트리밍하는 페이지
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
      <h1 className="text-xl font-bold">서스펜스 스트리밍</h1>
      <ul>
        <li>스트리밍은 UI의 단위를 서버에서 클라이언트로 점진적으로 랜더링하고 전송함</li>
        <li>사용자에게 가장 중료한 부분을 먼저 보게 하고 나머지는 추후 로딩함</li>
      </ul>
      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}