import { fileURLToPath } from "url";
import path, { dirname } from "path";
import protobufjs from "protobufjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = new protobufjs.Root();
root.resolvePath = (origin, target) =>
  path.join(__dirname, "protobufs", target);
root.loadSync("meshtastic/mqtt.proto");

export const Data = root.lookupType("Data");
export const ServiceEnvelope = root.lookupType("ServiceEnvelope");
export const Position = root.lookupType("Position");
export const User = root.lookupType("User");
