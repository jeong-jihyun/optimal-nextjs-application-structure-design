import { TabNavItem } from "../../ui/tab-nav-item";
import React from "react";
import { Metadata } from "next";
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
  title: "레벨업 Next.js: 라우팅",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabNavItem href="/">Back</TabNavItem>
      </div>

      <div>{children}</div>
    </div>
  );
}
