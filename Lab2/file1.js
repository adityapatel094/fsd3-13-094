
import { writeFile } from "fs/promises";

await writeFile("stud.txt", "Name: Aditya Patel");

console.log("File written");