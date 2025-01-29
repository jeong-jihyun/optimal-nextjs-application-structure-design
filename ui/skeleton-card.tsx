import clsx from "clsx";
/**
 * <pre>
 * 기본 클래스:
 * ㆍrounded-2xl                                : 모서리를 둥글게 만듭니다.
 * ㆍbg-gray-100/80                             : 배경색을 회색으로 설정하고, 불투명도를 80%로 설정합니다.
 * ㆍp-4                                        : 내부 여백(padding)을 1rem(16px)로 설정합니다.
 *
 * 조건부 클래스 (isLoading이 true일 때 적용):
 * ㆍrelative                                   : 요소를 상대적으로 위치시킵니다.
 * ㆍoverflow-hidden                            : 자식 요소가 부모 요소를 벗어날 때 잘리도록 설정합니다.
 * ㆍbefore:absolute                            : ::before 가상 요소를 절대 위치로 설정합니다.
 * ㆍbefore:inset-0                             : ::before 가상 요소를 부모 요소의 모든 면에 0으로 설정하여 부모 요소를 완전히 덮도록 합니다.
 * ㆍbefore:-translate-x-full                   : ::before 가상 요소를 수평으로 완전히 이동시킵니다.
 * ㆍbefore:animate-[shimmer_1.5s_infinite]     : ::before 가상 요소에 1.5초 동안 무한히 반복되는 shimmer 애니메이션을 적용합니다.
 * ㆍbefore:bg-gradient-to-r                    : ::before 가상 요소에 오른쪽으로 향하는 그라데이션 배경을 설정합니다.
 * ㆍbefore:from-transparent                    : 그라데이션의 시작 부분을 투명하게 설정합니다.
 * ㆍbefore:via-white/10                        : 그라데이션의 중간 부분을 10% 불투명한 흰색으로 설정합니다.
 * ㆍbefore:to-transparent                      : 그라데이션의 끝 부분을 투명하게 설정합니다.
 * 
 * 이 클래스들은 Tailwind CSS를 사용하여 정의된 것으로 보이며, isLoading이 true일 때 로딩 애니메이션을 적용하여 스켈레톤 로딩 효과를 제공합니다.
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
export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={clsx("rounded-2xl bg-gray-100/80 p-4", {
      "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
        isLoading,
    })}
  >
    <div className="space-y-3">
      <div className="bg-gray-300 rounded-lg h-14" />
      <div className="w-11/12 h-3 bg-gray-400 rounded-lg" />
      <div className="w-8 h-3 bg-gray-300 rounded-lg" />
    </div>
  </div>
);
