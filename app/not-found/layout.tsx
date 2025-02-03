import { Metadata } from "next";
import { getTopCategories } from "../../data/category";
import { TabGroup } from "../../ui/tab-group";
import { ClickCounter } from "../../ui/click-counter";
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
export const metadata: Metadata = {
  title: "레벨업 Next.js: 페이지 없음 UI",
};

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
          path="/not-found"
          items={[
            {
              text: "홈",
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
            {
              text: "❗미존재 항목❗",
              slug: "does-not-exist",
            },
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
