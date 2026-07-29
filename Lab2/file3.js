
import { unlink } from "fs";
import {readFile, writeFile, appendFile} from "fs/promises";
const writeData =async ( fname, contents ) => {
    await writeFile(fname, contents);
    console.log("File written");

};

const readData =async ( fname ) => {
    const data = await readFile(fname, 'utf-8');
    console.log('file contents');
    console.log(data);
};
const deleteFile = async (fname)=>{
    await unlink(fname);
    console.log('${fname')
}

const appendData = async (fname,contents) => {
    await appendFile(fname,"\n" + contents);
};

await writeData("happy.txt", "I am very happy");
await readData("happy.txt");
await appendData("happy.txt", "FSD is interesting");
await readData("happy.txt");
