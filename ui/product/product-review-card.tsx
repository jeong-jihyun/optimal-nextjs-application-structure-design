import { Review } from "../../data/review";
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
export const ProductReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="text-sm text-gray-800">{review.name}</div>
        </div>

        {review.rating ? <ProductRating rating={review.rating} /> : null}
      </div>

      <div className="text-gray-800">{review.text}</div>
    </div>
  );
};
