import React, { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("서버 통신테스트");

  useEffect(() => {
    const indentifyUrl = "http://localhost:5000/auth/indentify";
    try {
      fetch(indentifyUrl)
        .then((respones) => respones.json())
        .then((result) => setUsername(result.data.name));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">{username}</header>
    </div>
  );
}
export default App;
