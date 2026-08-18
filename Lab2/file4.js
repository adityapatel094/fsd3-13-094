import { mkdir } from "fs/promises";

await mkdir("upload", { recursive: true });

await mkdir("upload/images", { recursive: true });

console.log("Images folder created");