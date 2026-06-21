import ImageWithFallback from "@/components/custom/image-with-fallback.component"
import { reviews } from "../-temp.data"
import Rating from "@/components/custom/product-rating.component"

const ProductReviews = () => {
    return (
        <div className="relative">
        {reviews?.map((review) => (
            <div
            key={review._id}
            className="flex space-x-4 text-sm text-muted-foreground"
            >
            <div className="flex-none py-6">
                {review.user?.image &&
                (review.user.image.startsWith("http://") ||
                review.user.image.startsWith("https://")) ? (
                <ImageWithFallback
                    src={review.user.image}
                    alt={review.user?.name?.[0] || "U"}
                    width={42}
                    height={42}
                    className="rounded-full"
                />
                ) : (
                <div className="flex items-center justify-center w-10.5 h-10.5 rounded-full bg-muted text-lg font-semibold text-muted-foreground">
                    {review.user?.name?.[0] || "U"}
                </div>
                )}
            </div>
            <div className="py-6 w-full">
                <h3 className="font-medium mb-1 text-foreground">
                {review?.user?.name}
                </h3>
                <Rating
                    size="xs"
                    rating={review.rating}
                    showReviews={false}
                />
                <span className="text-xs text-muted-foreground">
                {new Date(review.createdAt).toLocaleDateString()}
                </span>

                <p className="text-sm text-muted-foreground mt-2">
                {review.comment}
                </p>
                {review.images.filter(Boolean).length > 0 && (
                <div className="flex gap-1 flex-wrap mt-3">
                    {review.images.filter(Boolean).map((img, idx) => (
                    <div
                        key={idx}
                        className="relative w-16 h-16 cursor-pointer"
                    >
                        <ImageWithFallback
                            src={img ?? ""}
                            alt="review image"
                            // layout="fill"
                            // objectFit="cover"
                            className="rounded-md border"
                            // onClick={() =>
                            //     openZoom(review.images.filter(Boolean), idx)
                            // }
                        />
                    </div>
                    ))}
                </div>
                )}
            </div>
            </div>
        ))}
        </div>
    )
}

export default ProductReviews