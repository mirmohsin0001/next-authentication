import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(){
    const conn = dbConnect();
    return NextResponse.json({message: "Check your server console for the connection status"});
}