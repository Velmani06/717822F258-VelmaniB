import React, { useState } from "react";
import { registerCompany, getAuthToken } from "./components/Regservices";

function App() {
  const [clientID, setClientID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [authToken, setAuthToken] = useState("");

  const handleRegister = async () => {
    try {
      const response = await registerCompany();
      console.log("Registration Response:", response);
      alert(`Registered Successfully! Save your credentials.`);
    } catch (error) {
      alert("Registration failed! Check console.");
    }
  };


  const handleAuth = async () => {
    try {
      if (!clientID || !clientSecret) {
        alert(" Please enter Client ID and Client Secret.");
        return;
      }
      const token = await getAuthToken(clientID, clientSecret);
      setAuthToken(token);
      alert("Authentication Successful! Token received.");
    } catch (error) {
      alert("Authentication failed! Check console.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Company Registration & Authentication</h2>

      <button
        onClick={handleRegister}
        style={{ padding: "10px", margin: "10px" }}
      >
        Register Company
      </button>

      <h3>Get Auth Token</h3>
      <input
        type="text"
        placeholder="Client ID"
        value={clientID}
        onChange={(e) => setClientID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Client Secret"
        value={clientSecret}
        onChange={(e) => setClientSecret(e.target.value)}
      />
      <button onClick={handleAuth} style={{ padding: "10px", margin: "10px" }}>
        Get Token
      </button>

      {authToken && (
        <div>
          <h4>Auth Token:</h4>
          <textarea readOnly value={authToken} rows="4" cols="50"></textarea>
        </div>
      )}
    </div>
  );
}

export default App;
