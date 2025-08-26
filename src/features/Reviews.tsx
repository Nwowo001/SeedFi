 "use client"
 import ReviewCard from "@/components/ui/ReviewsCard";
import { reviews } from "@/constants/reviews";
import Carousel from "@/components/common/Carousel";
const Reviews = () => {
  return (
    <Carousel
      data={reviews}
      CardComponent={({ item }) => <ReviewCard review={item} />}
      title="Real Stories. Real People. Real Impact."
      subtitle="What real people say about SeedFi"
    />
  );
};

export default Reviews;
