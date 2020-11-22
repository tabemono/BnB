export const fetchRides = () =>
  $.ajax({
    url: "/api/rides",
    method: "GET",
  });

export const fetchRide = (rideId) =>
  $.ajax({
    url: `/api/rides/${rideId}`,
    method: "GET",
  });

export const updateRide = (ride) =>
  $.ajax({
    method: "PATCH",
    url: `/api/rides/${ride.id}`,
    data: { ride },
  });

export const createRide = (ride) =>
  $.ajax({
    method: "POST",
    url: "/api/rides",
    data: { ride },
  });
