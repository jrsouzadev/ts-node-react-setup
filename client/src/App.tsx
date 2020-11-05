import React, { useEffect, useState } from 'react';
import socketioClient from 'socket.io-client';


function useSocket() {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    let conn = socketioClient();
    conn.on('connect', () => {
      console.log(`Socket connected with id ${conn.id}`)
    });
    setSocket(conn);
  }, []);

  return socket;
}


function App() {
  const socket = useSocket();

  return (
    <div>
      React App
    </div>
  );
}

export default App;
