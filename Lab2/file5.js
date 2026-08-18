import {stat} from "fs/promises";

const data = await stat("readme.md");

console.log("is file:",data.isFile());
console.log("is directory:",data.isDirectory());
console.log("size(bytes):",data.size);
console.log("last modified:",data.mtime);