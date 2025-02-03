import { getCategories, getCategory } from "../../../data/category";
import { Boundary } from "../../../ui/boundary";
import { TabGroup } from "../../../ui/tab-group";
import { Counter } from "../context-click-counter";
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
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await getCategory((await params).categorySlug);
  const items = await getCategories((await params).categorySlug);

  return (
    <Boundary label={["Layout [Server Component]"]} animateRerendering={false}>
      <div className="space-y-9">
        <TabGroup
          path={`/context/${category.slug}`}
          items={[
            {
              text: "전체",
            },
            ...items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />
        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
