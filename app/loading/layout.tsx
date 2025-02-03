import { getTopCategories } from "../../data/category";
import { ClickCounter } from "../../ui/click-counter";
import { TabGroup } from "../../ui/tab-group";
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
  const categories = await getTopCategories();
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/loading"
          items={[
            { text: "홈" },
            ...categories.map((x) => ({ text: x.name, slug: x.slug })),
          ]}
        />
        <div className="self-start">
          <ClickCounter />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
