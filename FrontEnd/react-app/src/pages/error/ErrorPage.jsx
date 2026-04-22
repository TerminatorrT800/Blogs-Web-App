import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Greška!</h2>
      <p>{error.message}</p>
      <NavLink to="/blogs">Back to the homepage...</NavLink>
    </div>
  );
};

export default ErrorPage