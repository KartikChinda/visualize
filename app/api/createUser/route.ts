import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

export async function POST (req: NextRequest) {
    try {
        const userData = req.body; 
        const newUser = await prisma.user.upsert({
            update: {...userData}, 
            create: {...userData}
        })
    } catch (error) {
        return NextResponse.json(
            {error: "User creation failed."}, 
            {status: 500},
        )
    }
}