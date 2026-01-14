import React, { useState, useRef, useEffect } from "react";
import "./ChatAi.css";

const ChatAi = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // once first message is sent
  const isChatMode = messages.length > 0;

  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // typing animation
  const typeResponse = (text) => {
    let index = 0;
    let typedText = "";

    setMessages((prev) => [...prev, { role: "ai", text: "" }]);

    const interval = setInterval(() => {
      if (index < text.length) {
        typedText += text[index];
        index++;

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = typedText;
          return updated;
        });
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 20);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/chat/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: userMessage }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      typeResponse(data.answer || "I couldn't generate a response.");
    } catch (error) {
      typeResponse("AI service is currently unavailable. Please try again.");
    }
  };

  return (
    <div className="main-content">
      <div className="page-container">
        {/* landing mode */}
        {!isChatMode && (
          <>
            <div className="glass-container">
              <h1 className="text-center text-dark">Track. Improve. Thrive</h1>
              <p className="text-center mt-3 text-dark">
                LifeAI helps you stay healthy, fit, and mindful every day.
              </p>
            </div>

            {/* <div className="cards-container">
              <div className="card">
                <h3>Current Status</h3>
                <div className="card-row">
                  <p>
                    <strong>Temperature:</strong> 27°C
                  </p>
                  <p>
                    <strong>AQI:</strong> 78 (Moderate)
                  </p>
                </div>
              </div>

              <div className="card">
                <h3>Special for Today</h3>
                <p className="day-text">
                  🌿 “Take a 15 minute walk today, your mind & body will thank
                  you.”
                </p>
              </div>
            </div> */}
          </>
        )}

        {/* chat messages */}
        <div className={`chat-messages ${isChatMode ? "chat-mode" : ""}`}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.role === "user" ? "user" : "ai"}`}
            >
              <strong>{msg.role === "user" ? "You" : "LifeAI"}:</strong>{" "}
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="chat-message ai">
              <strong>LifeAI:</strong> Thinking...
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>

        {/* input */}
        <div
          className={`chat-input-container ${
            isChatMode ? "chat-input-bottom" : ""
          }`}
        >
          <form className="input-wrapper" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask LifeAi about your health..."
              className={`input-box ${
                isChatMode ? "input-small" : "input-large"
              }`}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatAi;
