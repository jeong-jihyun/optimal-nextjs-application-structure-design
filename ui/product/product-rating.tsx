import { StarIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
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
export const ProductRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-x-1">
        <span>평점: </span>
        {Array.from({ length: 5 }).map((_, i) => {
          return (
              <StarIcon
                key={i}
                className={clsx('w-4', i < rating ? 'text-gray-800' : 'text-gray-300')}
              />
          );
        })}
      </div>
    );
  };