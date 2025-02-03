import { getTopCategories } from "../../data/category";
import { Boundary } from "../../ui/boundary";
import { TabGroup } from "../../ui/tab-group";
import ContextClickCounter from "./context-click-counter";
import { CounterProvider } from "./counter-context";
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
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = getTopCategories();
  return (
    <Boundary
      label={["Server Component Boundary"]}
      size="small"
      animateRerendering={false}
    >
      <Boundary
        label={["Counter Context Provider [Client Component]"]}
        color="blue"
        size="small"
        animateRerendering={false}
      >
        <CounterProvider>
          <Boundary
            label={["Server Component Boundary"]}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex justify-between">
                <TabGroup
                  path="/context"
                  items={[
                    {
                      text: "홈",
                    },
                    ...categories.map((x) => ({
                      text: x.name,
                      slug: x.slug,
                    })),
                  ]}
                />
              </div>

              <ContextClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  );
}
