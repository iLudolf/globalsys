import {
    infoSistem,
    infoSistemCpu,
    infoSistemTotalmem
} from "./infoSistem-routes"


const routerSocket = (io: any) => {

    let sequenceNumberByClient = new Map();

    io.on("connection", (socket: any) => {
        console.info(`Client connected [id=${socket.id}]`);
        // initialize this client's sequence number
        sequenceNumberByClient.set(socket, 1);

        socket.emit("connection", "Wellou World");

        socket.emit("storage", infoSistem(socket));
        socket.emit("cpu", infoSistemCpu(socket));
        socket.emit('totalmem', infoSistemTotalmem(socket));

        // when socket disconnects, remove it from the list:
        socket.on("disconnect", () => {
            sequenceNumberByClient.delete(socket);
            console.info(`Client gone [id=${socket.id}]`);
        });

    });

};

export default routerSocket;

