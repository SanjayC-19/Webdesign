import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Welcome to My App</h1>
      <p style={styles.subtitle}>
        A simple React + Vite landing page with routing
      </p>
      <Link to="/about" style={styles.link}>
        <button style={styles.button}>Learn More</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4f46e5, #9333ea)",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#4f46e5",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  link: {
    textDecoration: "none",
  },
};
