import { notFound } from "next/navigation";
import { Category } from "../../../data/category";
import { SkeletonCard } from "../../../ui/skeleton-card";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const res = await fetch(
    `https://app-router-api.vercel.app/api/categories?delay=1000&slug=${
      (
        await params
      ).categorySlug
    }`,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const category = (await res.json()) as Category;
  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-800/80">{category.name}</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
