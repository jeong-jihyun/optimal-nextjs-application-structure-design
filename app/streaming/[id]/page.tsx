import { Suspense } from "react";
import { Ping } from "../../../ui/product/ping";
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from "../../../ui/product/recommended-products";
import { SingleProduct } from "../../../ui/product/single-product";
import { Reviews, ReviewsSkeleton } from "../../../ui/product/reviews";

/**
 * <pre>
 * 서스펜스를 스트리밍하는 페이지
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
export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct
        data={fetch(
          `https://app-router-api.vercel.app/api/products?id=${params.id}`
        )}
      />

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* 스트리밍에 유리한 느린 데이터 요청을 시뮬레이션하기 위해 의도적으로 응답을 지연시킵니다 */}
        {/* 스트리밍을 더 잘 보여주기 위해 Next.js 캐시를 의도적으로 비활성화합니다 */}
        <RecommendedProducts
          path="/streaming/"
          data={fetch(
            `https://app-router-api.vercel.app/api/products?delay=500&filter=${params.id}`,
            {
              cache: "no-store",
            }
          )}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* 스트리밍에 유리한 느린 데이터 요청을 시뮬레이션하기 위해 의도적으로
        응답을 지연시킵니다 */}
        {/* 스트리밍을 더 잘 보여주기 위해 Next.js 캐시를 의도적으로 비활성화합니다 */}
        <Reviews
          data={fetch(
            `https://app-router-api.vercel.app/api/reviews?delay=1000`,
            {
              cache: "no-store",
            }
          )}
        />
      </Suspense>
    </div>
  );
}
