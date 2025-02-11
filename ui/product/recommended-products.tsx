import { Product } from "../../data/product";
import { ProductCard } from "./product-card";
/**
 * <pre>
 * 서스펜스 스트리밍 된 데이터를 처리하는 컴포넌트
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
export async function RecommendedProducts({
    path,
    data,
  }: {
    path: string;
    data: Promise<Response>;
  }) {
    const products = (await data.then((res) => res.json())) as Product[];
  
    return (
      <div className="space-y-6">
        <div>
          <div className="text-lg font-medium text-gray-800">
            추천 제품
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="col-span-4 lg:col-span-1">
              <ProductCard product={product} href={`${path}/${product.id}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;
  
  function ProductSkeleton() {
    return (
      <div className="col-span-4 space-y-4 lg:col-span-1">
        <div className={`relative h-[167px] rounded-xl bg-gray-300 ${shimmer}`} />
  
        <div className="w-full h-4 bg-gray-200 rounded-lg" />
        <div className="w-1/3 h-6 bg-gray-100 rounded-lg" />
        <div className="w-full h-4 bg-gray-300 rounded-lg" />
        <div className="w-4/6 h-4 bg-gray-100 rounded-lg" />
      </div>
    );
  }
  
  export function RecommendedProductsSkeleton() {
    return (
      <div className="space-y-6 pb-[5px]">
        <div className="space-y-2">
          <div className={`h-6 w-1/3 rounded-lg bg-gray-400 ${shimmer}`} />
          <div className={`h-4 w-1/2 rounded-lg bg-gray-200 ${shimmer}`} />
        </div>
  
        <div className="grid grid-cols-4 gap-6">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      </div>
    );
  }