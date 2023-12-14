import { promises as fs } from 'fs';
import path from 'path';

// Path to the JSON file
const dataFilePath = path.join(process.cwd(), '/helper/data.json');

// Helper function to read data from JSON file
export async function readData() {
    const jsonData = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(jsonData);
}

// Helper function to write data to JSON file
export async function writeData(data) {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(dataFilePath, jsonData, 'utf8');
}