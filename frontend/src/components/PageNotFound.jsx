import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "150px",
        color: "#000000",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
