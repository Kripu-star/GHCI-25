import React from "react";

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome to My App 🚀
      </h1>
      <p style={{ maxWidth: "600px", fontSize: "1.25rem", opacity: 0.9 }}>
        This is a simple landing page built with React + TypeScript + Vite.
        Start editing <code>LandingPage.tsx</code> to make it yours!
      </p>
      <button
        style={{
          marginTop: "2rem",
          backgroundColor: "white",
          color: "#1e3a8a",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = "#bfdbfe";
        }}
        onMouseOut={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = "white";
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
