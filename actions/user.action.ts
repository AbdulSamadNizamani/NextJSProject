"use server";

import  User  from "@/modals/user.modal";
import { Connect } from "@/db";

export async function createUser(user:any){
    try {
        await Connect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}