import { getCategories, getCategory } from "../../../data/category";
import { ClickCounter } from "../../../ui/click-counter";
import { TabGroup } from "../../../ui/tab-group";
import { LayoutHooks } from "../_components/router-context-layout";

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
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/hooks/${category.slug}`}
          items={[
            {
              text: "All",
            },
            ...items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <LayoutHooks />

      <div>{children}</div>
    </div>
  );
}
