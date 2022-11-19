import pino from "pino";

const logger = pino({
    transport : {
        target: "pino-pretty",
        options: {
            colorize: true
            //tranlateTime: `SYS:dd-mm-yyyy HH:MM:ss`
        }
    }
});

export default logger;