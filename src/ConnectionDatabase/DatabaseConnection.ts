import dotenv from 'dotenv'
dotenv.config();

const MONGO = {
    url: `${process.env.CONNECTIONDATABASE}`,
}
const Config = {
    mongo: MONGO
};

export default Config;