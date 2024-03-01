import axios from "axios";

const localURL = "http://localhost:3000/api";
const vercelURL = "https://auth-app-server-five.vercel.app/api";

const URL = vercelURL; // Change to localURL if testing locally

const loginURL = `${URL}/login`;
const signUpURL = `${URL}/signup`;
const logoutURL = `${URL}/logout`;
const getUserURL = `${localURL}/admin/dashboard`;
const approveUserURL = `${localURL}/admin/dashboard/approve`;

const LoginApi = async (data) => {
  return await axios.post(loginURL, data, {
    withCredentials: true,
  });
};

const SignUpApi = async (data) => {
  return await axios.post(signUpURL, data, {
    withCredentials: true,
  });
};

const LogoutApi = async () => {
  return await axios.get(logoutURL);
};

export function getToken() {
  let user = localStorage.getItem("user");
  if (!user) return;
  const userObj = JSON.parse(user);
  return userObj.token;
}

const getUserDetails = async (data) => {
  let token = getToken();
  return await axios.get(getUserURL, {
    withCredentials: true,
    headers: {
      auth: token,
    },
  });
};

const approveUser = async (data) => {
  let token = getToken();
  return await axios.post(approveUserURL, data, {
    withCredentials: true,
    headers: {
      auth: token,
    },
  });
};

export { LoginApi, SignUpApi, LogoutApi, getUserDetails, approveUser };
