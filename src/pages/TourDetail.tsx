import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { toursService } from "../api/service/tours";
import { reviewsService } from "../api/service/reviews";
import "../App.css";

interface Tour {
  id: number;
  name: string;
  background_image: string;
  pack_includes: string[];
  rating: number;
  price: number;
  duration: string;
  description: string;
  available_dates: string[];
  max_people: number;
}

interface Review {
  id: number;
  tour_id: number;
  user_id: number;
  rating: number;
  comment: string;
  date: string;
}

function TourDetail() {
  const { id } = useParams();
  const [tourDetailsData, setTourDetailsData] = useState<Tour | null>(null);
  const [reviewsData, setReviewsData] = useState<Review[]>([]);

  const { data: tours } = useFetch<Tour[]>(toursService);
  const { data: reviews } = useFetch<Review[]>(reviewsService);

  useEffect(() => {
    if (!tours) return;
    const result = tours.find((item) => item.id === Number(id));
    setTourDetailsData(result || null);
  }, [id, tours]);

  useEffect(() => {
    if (!reviews) return;
    const result = reviews.filter((review) => review.tour_id === Number(id));
    setReviewsData(result);
  }, [id, reviews]);

  return (
    <div>
      <Navbar />
      <div className="tour-detail">
        {tourDetailsData ? (
          <div className="tour-container">
            <h2>💬 Reviews:</h2>
            {reviewsData.length > 0 ? (
              <ul className="reviews-list">
                {reviewsData.map((review) => (
                  <li key={review.id}>
                    <p>
                      <strong>🗣 User {review.user_id}:</strong> {review.comment}
                    </p>
                    <p>
                      <strong>⭐ Rating:</strong> {review.rating}
                    </p>
                    <p>
                      <strong>📅 Date:</strong> {review.date}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        ) : (
          <p>Loading tour details...</p>
        )}
      </div>
    </div>
  );
}

export default TourDetail;
