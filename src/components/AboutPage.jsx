import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 About This App</h1>
      <p style={styles.text}>
        This is a demo app built with <b>React + Vite</b>.  
        It shows how to do simple routing and UI styling.
      </p>
      <Link to="/" style={styles.link}>
        <button style={styles.button}>⬅ Back to Home</button>
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
    background: "#f3f4f6",
    color: "#111827",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#4f46e5",
  },
  text: {
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#4f46e5",
    color: "#fff",
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
