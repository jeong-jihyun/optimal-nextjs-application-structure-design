import { getCategories, getCategory } from "../../data/category";
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
interface LayOutProps {
  children: React.ReactNode;
  params: {
    categorySlug: string;
  };
}

export default async function Layout({ children, params }: LayOutProps) {
  const category = await getCategory((await params).categorySlug);
  const items = await getCategories((await params).categorySlug);

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/error-handling/${category.slug}`}
            items={[
              {
                text: "전체",
              },
              ...items.map((x) => ({ text: x.name, slug: x.slug })),
            ]}
          />
          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
