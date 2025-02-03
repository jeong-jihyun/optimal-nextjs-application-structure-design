import { SkeletonCard } from "../../ui/skeleton-card";
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
export default function Loading(){
    return <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">로딩중 ...</h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
        </div>
    </div>
}