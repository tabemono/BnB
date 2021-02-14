export const fetchReviews = (rideId) =>
  $.ajax({
    url: "/api/reviews",
    data: { rideId },
  });

export const createReview = (review) =>
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: { review },
  });
