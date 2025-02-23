import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(){
    const con = await dbConnect();
    return NextResponse.json({message: "Check your server console for the connection status"});
}