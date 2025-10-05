import { useEffect, useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/rooms/")
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Hotel Rooms</h1>
      {rooms.length === 0 ? (
        <p>No rooms found.</p>
      ) : (
        <ul>
          {rooms.map(room => (
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
