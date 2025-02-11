import Link from "next/link";
import { Boundary } from "../../../ui/boundary";
import { CurrentRoute } from "../_ui/current-route";
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
export default function Default() {
    return (
      <Boundary label={['@views/default.tsx']} color="blue" size="small">
        <div className="prose-sm prose max-w-none">
          <h2 className="text-lg font-bold">디폴트(Default) UI</h2>
  
          <p>
            <code>@views</code> 내에 현재 <code>
              /<CurrentRoute slice={1} />
            </code>{' '}경로에 일치하는 라우트 세그먼트가 없기 때문에 디폴트 UI가 렌더링됨
          </p>
  
          <ul className="text-xs">
            <li>
              <code>
                @views/
                <CurrentRoute />
                /page.js
              </code>{' '}
              미 존재 하기 때문에
            </li>
  
            <li>
              <code>@views/default.js</code>를 보여줌
            </li>
          </ul>
          <div className="flex not-prose">
            <Link
              href="/parallel-routes"
              className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg hover:bg-gray-500 hover:text-white"
            >
              홈으로
            </Link>
          </div>
        </div>
      </Boundary>
    );
  }