export const getUserToken = () => {
    let userDetails = localStorage.getItem("user-token");
    return userDetails;
  };