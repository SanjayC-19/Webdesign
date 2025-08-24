import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My App 🚀</h1>
      <p>This is the landing page</p>
      <Link to="/about">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to About Page
        </button>
      </Link>
    </div>
  );
}
