import { useState } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Hello!", sender: "Bot" }]);
      }, 1000);
    }
  };

  return (
    <div style={styles.chatContainer}>
      <h2>Chat Application</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={{ ...styles.message, background: msg.sender === "You" ? "#dcf8c6" : "#f1f1f1" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={styles.input} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
      <button onClick={sendMessage} style={styles.button}>Send</button>
    </div>
  );
}

const styles = {
  chatContainer: { textAlign: "center", padding: "20px" },
  chatBox: { minHeight: "200px", maxHeight: "300px", overflowY: "auto", padding: "10px", border: "1px solid #ddd", marginBottom: "10px" },
  message: { padding: "5px", margin: "5px 0", borderRadius: "5px", maxWidth: "80%" },
  input: { padding: "5px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "5px 10px", marginLeft: "5px", background: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" },
};

export default ChatApp;
