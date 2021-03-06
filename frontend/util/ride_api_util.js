export const fetchRides = (data) => {
  return $.ajax({
    url: "/api/rides",
    method: "GET",
    data,
  });
};

export const fetchRide = (rideId) => {
  return $.ajax({
    url: `/api/rides/${rideId}`,
    method: "GET",
  });
};

export const rideSearch = (keyword) => {
  return $.ajax({
    method: "GET",
    url: "/api/rides",
    data: {
      keyword,
    },
  });
};


// export const updateRide = (ride) => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/rides/${ride.id}`,
//     data: { ride },
//   });
// };

// export const createRide = (ride) => {
//   return $.ajax({
//     method: "POST",
//     url: "/api/rides",
//     data: { ride },
//   });
// };
