import React from "react";
import { Boundary } from "../../../ui/boundary";
import { TabGroup } from "../../../ui/tab-group";
import { ClickCounter } from "../../../ui/click-counter";
import { getTopCategories } from "../../../data/category";
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
}: {
  children: React.ReactNode;
}) {
  const categories = getTopCategories();

  return (
    <Boundary label={["main layout"]} color="orange" animateRerendering={false}>
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              {
                text: "Home",
              },
              ...categories.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              { text: "장바구니", slug: "cart" },
              { text: "후기", slug: "review" },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
