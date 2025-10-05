import { useEffect, useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);

  // Use environment variable from Render
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000/api";

useEffect(() => {
  fetch(`${API_BASE_URL}/rooms/`)
    .then((res) => res.json())
    .then((data) => setRooms(data))
    .catch((err) => console.error("Fetch error:", err));
}, [API_BASE_URL]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Hotel Rooms</h1>
      {rooms.length === 0 ? (
        <p>No rooms found.</p>
      ) : (
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <strong>{room.name}</strong> — ${room.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
