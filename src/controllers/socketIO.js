export default function socketIO(socketServer) {
  socketServer.on("connection", (socket) => {
    console.log(socket.id);
  });
}
