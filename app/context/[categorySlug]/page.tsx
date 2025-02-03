import { getCategory } from "../../../data/category";
import { Boundary } from "../../../ui/boundary";
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
export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await getCategory((await params).categorySlug);

  return (
    <Boundary label={["Page [Server Component]"]} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-800/80">
          모든 {category.name}
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}
