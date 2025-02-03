import { Boundary } from "../../../ui/boundary";

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
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Boundary animateRerendering={false} label={["제품"]} size="small">
      {children}
    </Boundary>
  );
}
