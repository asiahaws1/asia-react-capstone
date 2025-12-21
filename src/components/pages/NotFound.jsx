import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>

      <button
        onClick={() => {
          if (history.length > 1) {
            history.goBack();
          } else {
            history.push("/home");
          }
        }}
      >
        Go Back
      </button>
    </div>
  );
}
