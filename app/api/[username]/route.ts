import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient(); 

export async function GET(req: NextRequest, {params} : {params: {username: string}}) {
  const { username } = await params; 
  try {
    const userData = await prisma.user.findUniqueOrThrow({
      where: {
        username: username, 
      }
    }); 
    return NextResponse.json(
      userData, 
      {status: 200}, 
    )
  } catch (error) {
    return NextResponse.json(
      {error: "Failed to fetch the information for the said user."}, 
      { status: 500}
    )
  }
}