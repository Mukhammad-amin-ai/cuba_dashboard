import Api from "@/store/modules/Base_Url";

const verify = `${Api}/api/auth/emailverification`;
const login = `${Api}/api/auth/login`;

const token = localStorage.getItem("token");

function isUserValid() {
  if (!token) {
    return false;
  }
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    if (decodedToken.iss === login || decodedToken.iss === verify) {
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
