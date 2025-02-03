import { ExternalLink } from "../../ui/external-link";

/**
 * <pre>
 * 서버 사이드 랜더링 추가
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
      <h1 className="text-xl font-bold">동적데이터</h1>
      <ul>
        <li>서버에서 요청마다 새로 데이타를 가져옴</li>
        <li>이 예제에서 포스트 응답은 캐시되지 않음</li>
      </ul>
      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#dynamic-data-fetching">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
