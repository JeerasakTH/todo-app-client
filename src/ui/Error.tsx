import { useRouteError, useNavigate } from "react-router-dom";

type RouteError = {
  data?: string | number | boolean;
  message?: string;
};

type Props = {};

const Error = (props: Props) => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😥</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate("/")}>back</button>
    </div>
  );
};

export default Error;
