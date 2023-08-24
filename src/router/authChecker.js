const verify = "http://tulibayev.uz/api/user/emailverification";
const login = "http://tulibayev.uz/api/user/login";
const student = "http://tulibayev.uz/api/student/login"
const teacher = "http://tulibayev.uz/api/teacher/login"


const token = localStorage.getItem("token");

function isUserValid() {
  if (!token) {
    return false;
  }
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    if (decodedToken.iss === login || decodedToken.iss === verify ||decodedToken.iss ===student ) {
      return true;
    }else{
      return false;
    }
  } catch (error) {
    console.error("validatsiyada xatolik:", error);
    return false;
  }
}

export default isUserValid;