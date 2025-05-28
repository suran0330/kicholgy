"use client";

import { useState } from "react";
import { type Review, getProductReviews, getReviewStats } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WriteReviewModal from "@/components/WriteReviewModal";
import { Star, ThumbsUp, ThumbsDown, Verified, Filter, Edit } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { products } from "@/data/products";

interface ProductReviewsProps {
  productId: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [helpful, setHelpful] = useState(review.helpful);
  const [unhelpful, setUnhelpful] = useState(review.unhelpful);
  const [userVote, setUserVote] = useState<'helpful' | 'unhelpful' | null>(null);

  const handleVote = (type: 'helpful' | 'unhelpful') => {
    if (userVote === type) {
      // Remove vote
      if (type === 'helpful') {
        setHelpful(helpful - 1);
      } else {
        setUnhelpful(unhelpful - 1);
      }
      setUserVote(null);
    } else {
      // Add vote (and remove opposite if exists)
      if (userVote) {
        if (userVote === 'helpful') {
          setHelpful(helpful - 1);
        } else {
          setUnhelpful(unhelpful - 1);
        }
      }

      if (type === 'helpful') {
        setHelpful(helpful + 1);
      } else {
        setUnhelpful(unhelpful + 1);
      }
      setUserVote(type);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="border border-[#c1c0cb] rounded-lg p-6 space-y-4">
      {/* Review Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#746cad] rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm font-inter">
              {review.userInitials}
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-medium text-[#1c1c22] font-inter">
                {review.userName}
              </h4>
              {review.verified && (
                <div className="flex items-center text-green-600">
                  <Verified className="h-4 w-4 mr-1" />
                  <span className="text-xs font-inter">Verified Purchase</span>
                </div>
              )}
            </div>
            <p className="text-sm text-[#747474] font-inter">
              {new Date(review.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {review.skinType && (
            <Badge variant="outline" className="text-xs">
              {review.skinType} skin
            </Badge>
          )}
          {review.ageRange && (
            <Badge variant="outline" className="text-xs">
              {review.ageRange}
            </Badge>
          )}
        </div>
      </div>

      {/* Rating and Title */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(review.rating)}</div>
          <span className="text-sm text-[#747474] font-inter">
            {review.rating}/5
          </span>
        </div>
        <h3 className="font-semibold text-[#1c1c22] font-inter">
          {review.title}
        </h3>
      </div>

      {/* Review Content */}
      <p className="text-[#747474] leading-relaxed font-inter">
        {review.content}
      </p>

      {/* Pros and Cons */}
      {(review.pros || review.cons) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {review.pros && review.pros.length > 0 && (
            <div>
              <h5 className="font-medium text-green-600 mb-2 font-inter">Pros:</h5>
              <ul className="space-y-1">
                {review.pros.map((pro, index) => (
                  <li key={index} className="text-sm text-[#747474] font-inter">
                    + {pro}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {review.cons && review.cons.length > 0 && (
            <div>
              <h5 className="font-medium text-red-600 mb-2 font-inter">Cons:</h5>
              <ul className="space-y-1">
                {review.cons.map((con, index) => (
                  <li key={index} className="text-sm text-[#747474] font-inter">
                    - {con}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Helpful/Unhelpful */}
      <div className="flex items-center justify-between pt-4 border-t border-[#efeff0]">
        <p className="text-sm text-[#747474] font-inter">
          Was this review helpful?
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleVote('helpful')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
              userVote === 'helpful'
                ? 'bg-green-100 text-green-700'
                : 'bg-[#efeff0] text-[#747474] hover:bg-[#c1c0cb]'
            }`}
          >
            <ThumbsUp className="h-3 w-3" />
            <span className="font-inter">{helpful}</span>
          </button>
          <button
            onClick={() => handleVote('unhelpful')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
              userVote === 'unhelpful'
                ? 'bg-red-100 text-red-700'
                : 'bg-[#efeff0] text-[#747474] hover:bg-[#c1c0cb]'
            }`}
          >
            <ThumbsDown className="h-3 w-3" />
            <span className="font-inter">{unhelpful}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const { isAuthenticated, openLoginModal } = useAuth();
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'>('newest');
  const [filterBy, setFilterBy] = useState<number | null>(null);
  const [showWriteReview, setShowWriteReview] = useState(false);

  const product = products.find(p => p.id === productId);

  const productReviews = getProductReviews(productId);
  const stats = getReviewStats(productId);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const sortedReviews = [...productReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const filteredReviews = filterBy
    ? sortedReviews.filter(review => review.rating === filterBy)
    : sortedReviews;

  const getPercentage = (count: number) => {
    return stats.totalReviews > 0 ? (count / stats.totalReviews) * 100 : 0;
  };

  if (productReviews.length === 0) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#1c1c22] font-lato">
          Customer Reviews
        </h2>
        <div className="text-center py-12 border border-[#c1c0cb] rounded-lg">
          <Star className="h-12 w-12 text-[#c1c0cb] mx-auto mb-4" />
          <p className="text-[#747474] font-inter mb-4">
            No reviews yet. Be the first to review this product!
          </p>
          <Button
            onClick={isAuthenticated ? () => setShowWriteReview(true) : openLoginModal}
            className="bg-[#746cad] hover:bg-[#aca4e9] text-white"
          >
            <Edit className="h-4 w-4 mr-2" />
            Write a Review
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1c1c22] font-lato">
        Customer Reviews
      </h2>

      {/* Review Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#efeff0] rounded-lg">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#1c1c22] mb-2 font-lato">
            {stats.averageRating}
          </div>
          <div className="flex justify-center mb-2">
            {renderStars(stats.averageRating)}
          </div>
          <p className="text-[#747474] font-inter">
            Based on {stats.totalReviews} review{stats.totalReviews !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-3">
              <span className="text-sm font-medium text-[#1c1c22] w-12 font-inter">
                {rating} star{rating !== 1 ? 's' : ''}
              </span>
              <div className="flex-1 bg-white rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getPercentage(stats.ratingBreakdown[rating as keyof typeof stats.ratingBreakdown])}%` }}
                />
              </div>
              <span className="text-sm text-[#747474] w-8 font-inter">
                {stats.ratingBreakdown[rating as keyof typeof stats.ratingBreakdown]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Button */}
      <div className="flex justify-center">
        <Button
          onClick={isAuthenticated ? () => setShowWriteReview(true) : openLoginModal}
          className="bg-[#746cad] hover:bg-[#aca4e9] text-white"
        >
          <Edit className="h-4 w-4 mr-2" />
          Write a Review
        </Button>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#efeff0] rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-[#747474]" />
            <span className="text-sm font-medium text-[#1c1c22] font-inter">Filter:</span>
            <select
              value={filterBy || ''}
              onChange={(e) => setFilterBy(e.target.value ? Number(e.target.value) : null)}
              className="border border-[#c1c0cb] rounded-lg px-3 py-1 text-sm font-inter"
            >
              <option value="">All ratings</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-[#1c1c22] font-inter">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="border border-[#c1c0cb] rounded-lg px-3 py-1 text-sm font-inter"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="highest">Highest rated</option>
            <option value="lowest">Lowest rated</option>
            <option value="helpful">Most helpful</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {filteredReviews.length === 0 && filterBy && (
        <div className="text-center py-8">
          <p className="text-[#747474] font-inter">
            No reviews found with {filterBy} star{filterBy !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Write Review Modal */}
      {product && (
        <WriteReviewModal
          isOpen={showWriteReview}
          onClose={() => setShowWriteReview(false)}
          productId={productId}
          productName={product.name}
        />
      )}
    </div>
  );
}
