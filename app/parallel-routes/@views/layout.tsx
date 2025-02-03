import { Boundary } from "../../../ui/boundary";
import { TabGroup } from "../../../ui/tab-group";
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
      <Boundary label={['parallel-routes/@views/layout.tsx']} size="small">
        <div className="space-y-8">
          <TabGroup
            path="/parallel-routes"
            items={[
              {
                text: '홈',
              },
              {
                text: '시청 횟수',
                slug: 'impressions',
              },
              {
                text: '시청 시간',
                slug: 'view-duration',
              },
            ]}
          />
          {children}
        </div>
      </Boundary>
    );
  }