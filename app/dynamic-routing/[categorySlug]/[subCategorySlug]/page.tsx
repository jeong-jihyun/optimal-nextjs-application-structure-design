import { getCategory } from "../../../../data/category";
import { SkeletonCard } from "../../../../ui/skeleton-card";
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
  params: { subCategorySlug: string };
}) {
  const category = await getCategory((await params).subCategorySlug);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-800/80">{category.name}</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
