"use server"

import { signupSchema } from "@/app/schema";
import z from "zod"
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const signup = async(values:z.infer<typeof signupSchema>)=>{
    //now i will validate these fields again as client side validation can always be bypassed

    const validatedFields=signupSchema.safeParse(values);

    if(!validatedFields.success){
        return { error : "Invalid Input"}
    }

    //extract the validated fields
    const {name , email , password}=validatedFields.data;

    //hashign the password
    const hashedPassword= await bcrypt.hash(password , 10);

    //checking if the user witht this email already exists
    const existingUser=await getUserByEmail(email);

    if(existingUser){
        return { error : "User with this email already exists"}
    }

    //creating the user in the database

    await db.user.create({
        data:{
        name ,
        email , 
        password:hashedPassword ,
        } ,
    })

    //send the verification token email




    return { success : "User created successfully!"}
   

};