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
      <h1 className="text-xl font-bold">동적라우팅</h1>
      <ul>
        <li>
          동적 라우팅(Dynamic Routing): URL 경로의 일부를 변수로 대체하여
          데이터에 따라 경로를 유연하게 생성
        </li>
      </ul>
      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/getting-started/layouts-and-pages">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
