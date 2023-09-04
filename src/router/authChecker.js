const verify = "http://tulibayev.uz/api/auth/emailverification";
const login = "http://tulibayev.uz/api/auth/login";
// const verify = "http://192.168.0.137:8000/api/auth/login";
// const login = "http://192.168.0.137:8000/api/auth/login";

const token = localStorage.getItem("token");

function isUserValid() {
  if (!token) {
    return false;
  }
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    if (
      decodedToken.iss === login ||
      decodedToken.iss === verify 
      // decodedToken.iss === student ||
      // decodedToken.iss === teacher
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("validatsiyada xatolik:", error);
    return false;
  }
}

export default isUserValid;
