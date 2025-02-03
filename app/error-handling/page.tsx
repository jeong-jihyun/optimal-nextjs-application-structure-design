import React from "react";
import { getCategory } from "../../data/category";
import { BuggyButton } from "../../ui/bgggy-button";
import { SkeletonCard } from "../../ui/skeleton-card";
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
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        모든 {category.name}
      </h1>

      <BuggyButton />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
