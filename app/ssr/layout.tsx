import { Metadata } from "next";
import { TabGroup } from "../../ui/tab-group";

/**
 * <pre>
 * 서버 사이드 랜더링 추가
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
  title: "레벨업 Next.js:SSR",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return (
    <div className="space-y-9">
      <TabGroup
        path="/ssr"
        items={[
          {
            text: "홈",
          },
          ...ids.map((x) => ({ text: `포스트 ${x.id}`, slug: x.id })),
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
