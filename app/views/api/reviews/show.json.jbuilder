json.review do
  json.partial! '/api/reviews/review', review: @review
end

json.rider do
  json.partial! '/api/users/user', user: @review.rider
end

