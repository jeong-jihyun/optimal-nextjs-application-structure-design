import Link from "next/link";
import { Product } from "../../data/product";
import Image from "next/image";
import { ProductBestSeller } from "./product-best-seller";
import { ProductRating } from "./product-rating";

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
export const ProductCard = ({
  product,
  href,
}: {
  product: Product;
  href: string;
}) => {
  return (
    <Link href={href} className="block group">
      <div className="space-y-2">
        <div className="relative">
          {product.isBestSeller ? (
            <div className="absolute z-10 flex left-2 top-2">
              <ProductBestSeller />
            </div>
          ) : null}
          <Image
            src={`/product/${product.image}`}
            width={400}
            height={400}
            className="rounded-xl grayscale group-hover:opacity-80"
            alt={product.name}
            placeholder="blur"
            blurDataURL={product.imageBlur}
          />
        </div>

        <div className="text-sm font-medium text-gray-600 truncate group-hover:text-vercel-cyan">
          {product.name}
        </div>

        {product.rating ? <ProductRating rating={product.rating} /> : null}
      </div>
    </Link>
  );
};
