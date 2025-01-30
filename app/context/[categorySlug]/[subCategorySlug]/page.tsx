import { Counter } from "@/context/context-click-counter";
import { getCategory } from "../../../../data/category";
import { Boundary } from "../../../../ui/boundary";

export default async function Page({
  params,
}: {
  params: { categorySlug: string; subCategorySlug: string };
}) {
  const category = await getCategory((await params).subCategorySlug);

  return (
    <Boundary label={["Page [Server Component]"]} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-400/80">
          {category.name}
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}
