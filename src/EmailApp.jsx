import { useState } from "react";

function EmailApp() {
  const [emails, setEmails] = useState([
    { id: 1, subject: "Welcome!", body: "Thanks for joining our service." },
    { id: 2, subject: "Meeting Reminder", body: "Don't forget the meeting at 3 PM." },
  ]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div style={styles.container}>
      <h2>Email Application</h2>
      <div style={styles.emailList}>
        {emails.map((email) => (
          <div key={email.id} onClick={() => setSelectedEmail(email)} style={styles.emailItem}>
            <strong>{email.subject}</strong>
          </div>
        ))}
      </div>
      {selectedEmail && (
        <div style={styles.emailContent}>
          <h3>{selectedEmail.subject}</h3>
          <p>{selectedEmail.body}</p>
          <button onClick={() => setSelectedEmail(null)} style={styles.button}>Back</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  emailList: { border: "1px solid #ddd", padding: "10px", marginBottom: "10px" },
  emailItem: { padding: "5px", cursor: "pointer", borderBottom: "1px solid #ccc" },
  emailContent: { padding: "10px", border: "1px solid #ddd" },
  button: { padding: "5px 10px", marginTop: "10px", background: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" },
};

export default EmailApp;
