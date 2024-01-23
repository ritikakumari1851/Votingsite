import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Chatroom() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [isJoined, setIsJoined] = useState(false);

  const socket = io("https://votingsitebackend.onrender.com/", {
    transports: ["websocket"],
  });

  useEffect(() => {
    // Cleanup function to handle socket disconnection
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on("joined", () => {
      setIsJoined(true);
    });
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, [room, socket]); // Include 'room' and 'socket' in the dependency array

  function send() {
    if (message.trim() !== "") {
      socket.emit("message", message, room);
      setMessage(""); // Clear the message input after sending
    }
  }

  function join() {
    if (room.trim() !== "") {
      socket.emit("join", room);
    }
  }

  return (
    <div className=" mt-32">
        
      {!isJoined ? (
        <div>
          <input
            value={room}
            type="text"
            placeholder="Enter Room Id"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={join}>Join</button>
        </div>
      ) : (
        <div>
          {messages.map((mess, index) => {
            return <p key={index}>{mess}</p>;
          })}

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Enter Message"
          />
          <button onClick={send}>Send</button>
        </div>
      )}
    </div>
  );
}

