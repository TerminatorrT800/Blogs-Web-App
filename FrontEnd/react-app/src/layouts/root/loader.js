import { redirect } from "react-router-dom";

const rootLoader = async () => {
  const token = localStorage.getItem("accessToken"); // ili kako već čuvaš

  if (!token) {
    return redirect("/login");
  }

  return redirect("/blogs");
}

export default rootLoader;