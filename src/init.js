import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () => console.log("sever listening on port 4000");

app.listen(PORT, handleListening);
