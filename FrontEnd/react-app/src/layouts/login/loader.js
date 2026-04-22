import { redirect } from "react-router-dom";

const checkAuthLoader = async () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    throw redirect("/blogs");
  }
  return null;
}

export default checkAuthLoader;