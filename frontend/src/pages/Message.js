import React, { useState } from "react";

export default function Message() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/backend/message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        setText("");
        setStatus("Message sent!");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="main-content-layout">
      <h3>Leave me a note about anything :)</h3>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 600 }}>
        <textarea
          rows="5"
          style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
          placeholder="Could be research related, a personal note or something completely random..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Send
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
