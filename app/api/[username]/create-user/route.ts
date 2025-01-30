import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { userSchema } from "@/app/schemas/userSchema";
import z from "zod"; 

const prisma = new PrismaClient(); 

export async function POST (req: NextRequest, {params} : {params: {username: string}}) {
    const username = await params.username; 
    try {
        const userData = await req.json(); 
        userSchema.parse(userData);
        const newUser = await prisma.user.upsert({
            where: {username: username}, 
            update: userData, 
            create: userData, 
        })

        return NextResponse.json(newUser, {status: 200}); 
    } catch (error) {
        if(error instanceof z.ZodError) {
            return NextResponse.json(
                {error: "Validation failed.", details: error.errors}, 
                {status: 400}
            )
        }
       
        return NextResponse.json(
            { error: "User creation failed.", details: error instanceof Error ? error.message : error },
            {status: 500},
        )
    }
}