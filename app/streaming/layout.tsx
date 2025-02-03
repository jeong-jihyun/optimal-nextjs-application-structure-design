import { Metadata } from "next";
import { TabGroup } from "../../ui/tab-group";

/**
 * <pre>
 * 서스펜스를 스트리밍하는 레이아웃
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
  title: "레벨업 Next.js:스트리밍",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

  return (
    <div className="space-y-9">
      <TabGroup
        path="/streaming"
        items={[
          {
            text: "홈",
          },
          ...ids.map((x) => ({ text: `제품 ${x.id}`, slug: x.id })),
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
