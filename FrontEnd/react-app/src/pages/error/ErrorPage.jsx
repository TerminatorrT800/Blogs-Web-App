import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Greška!</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage