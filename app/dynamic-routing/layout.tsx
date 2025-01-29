import { getTopCategories } from "../../data/category";
import { ClickCounter } from "../../ui/click-counter";
import { TabGroup } from "../../ui/tab-group";
/**
 * <pre>
 * ㆍspace-y-9                                  : Tailwind CSS 유틸리티 클래스입니다. 이 클래스는 자식 요소들 사이에 수직 간격을 추가합니다. 9는 Tailwind의 간격 단위로, 기본적으로 2.25rem (36px)에 해당합니다.
 * ㆍflex                                       : 이 클래스는 요소를 Flexbox 컨테이너로 만듭니다. Flexbox는 요소를 정렬하고 배치하는 데 사용되는 CSS 레이아웃 모델입니다.
 * ㆍjustify-between                            : 이 클래스는 Flexbox 컨테이너 내의 자식 요소들을 양 끝에 배치하고, 남은 공간을 자식 요소들 사이에 균등하게 분배합니다.
 * ㆍself-start                                 : 이 클래스는 Flexbox 컨테이너 내에서 해당 요소를 컨테이너의 시작 부분에 정렬합니다.
 * </pre>
 *
 * @author jeongjihyun
 * @since 2025-01-29
 * @version 1.0
 * @Modification
 * <pre>
 *     since          author              description
 *  ===========    =============    ===========================
 *  2025-01-29     jeongjihyun      최초 생성
 *
 * </pre>
 */
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topCategories = getTopCategories();
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/dynamic-routing"
          items={[
            { text: "홈" },
            ...topCategories.map((x) => ({ text: x.name, slug: x.slug })),
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
