import { Routes, Route, Link } from "react-router-dom";
import ChatApp from "./ChatApp";
import EmailApp from "./EmailApp";

function App() {
  return (
    <div style={styles.container}>
      <h1>Micro-Frontend App</h1>
      <nav>
        <Link to="/chat" style={styles.link}>Chat App</Link>
        <Link to="/email" style={styles.link}>Email App</Link>
      </nav>
      
      <Routes>
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/email" element={<EmailApp />} />
      </Routes>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  link: { margin: "10px", padding: "10px", textDecoration: "none", color: "white", background: "#007bff", borderRadius: "5px" },
};

export default App;
