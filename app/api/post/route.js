import { NextResponse } from "next/server";
import { readData, writeData } from "../../../helper/util";
export const dynamic = 'force-dynamic'; // defaults to auto

// POST method to create a new post
export async function POST(request) {
    const posts = await readData();
    const { title, body } = await request.json();
    const newPost = { id: posts.length + 1, title, body };
    posts.push(newPost);
    await writeData(posts);

    return NextResponse.json(posts, { status: 200 });
}

export async function GET(request) {

    await new Promise(resolve => setTimeout(resolve, 5000));
    const data = await readData();

    return NextResponse.json(data, { status: 200 });
}