export const fetchRides = () =>
  $.ajax({
    url: "/api/rides",
  });

export const fetchRide = (rideId) =>
  $.ajax({
    url: `/api/rides/${rideId}`,
  });

export const updateRide = (ride) =>
  $.ajax({
    method: "patch",
    url: `/api/rides/${ride.id}`,
    data: { ride },
  });

export const createRide = (ride) =>
  $.ajax({
    method: "post",
    url: "/api/rides",
    data: { ride },
  });

