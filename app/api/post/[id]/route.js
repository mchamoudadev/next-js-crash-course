import { NextResponse } from "next/server";
import { readData, writeData } from "../../../../helper/util";
export const dynamic = 'force-dynamic'; // defaults to auto

export async function PUT(request, { params }) {
    const posts = await readData();

    const { id } = params;
    const { title, body } = await request.json();
    const postIndex = posts.findIndex(post => post.id === parseInt(id));

    if (postIndex === -1) {
        return NextResponse.json({ error: "Invalid post" }, { status: 404, message: 404 });
    }

    posts[postIndex] = { ...posts[postIndex], title, body };
    await writeData(posts);

    return NextResponse.json(posts[postIndex], { status: 200 });
}

export async function DELETE(request, { params }) {
    const posts = await readData();
    const { id } = params;
    console.log("params", params);
    const postIndex = posts.findIndex(post => post.id === parseInt(id));

    if (postIndex === -1) {
        return NextResponse.json({ error: "Invalid post" }, { status: 404, message: 404 });
    }

    posts.splice(postIndex, 1);
    await writeData(posts);

    return NextResponse.json({ message: "deleted successfully" }, { status: 200 });
}


export async function GET(request, { params }) {

    const { id } = params;
    const posts = await readData();

    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return NextResponse.json({ error: "Invalid post" }, { status: 404, message: 404 });
    }

    return NextResponse.json(post, { status: 200 });
}

