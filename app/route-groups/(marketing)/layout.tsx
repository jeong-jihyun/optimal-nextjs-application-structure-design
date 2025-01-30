import { getTopCategories } from "../../../data/category";
import { Boundary } from "../../../ui/boundary";
import { TabGroup } from "../../../ui/tab-group";

export default function Layout({ children }: { children: React.ReactNode }) {
  const topCategoies = getTopCategories();
  return (
    <Boundary
      label={["marketing layout"]}
      color="cyan"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              { text: "Home" },
              ...topCategoies.map((category) => ({
                text: category.name,
                slug: category.slug,
              })),
              { text: "장바구니", slug: "cart" },
              { text: "후기", slug: "review" },
            ]}
          />
        </div>
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
