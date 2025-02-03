import { Boundary } from "../../../ui/boundary";
import { TabNavItem } from "../../../ui/tab-nav-item";
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
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary
      label={["cate layout"]}
      color="blue"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <TabNavItem href="/route-groups">Back</TabNavItem>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
