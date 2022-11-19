import config from "../configs";
import mongoose from "mongoose";
import logger from "./logger";

let database;

const connect = async () => {
    const MONGOBD_URL = config.DB_CONNECTION;

    if (database) return;
    
    mongoose.connect(MONGOBD_URL)
    .then((connection) => {
        database = connection;
        logger.info("Database synced!")
    })
    .catch((err) => {
        logger.error(`${err.message}`);
    })
}

export { connect };