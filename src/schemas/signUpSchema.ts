import {z} from "zod"

const usernameValidation = z
       .string()
       .min(3 , "Username atleast 3 characters")
       .max(10, "Username max 10 characters")
       .regex(/^[a-zA-Z0-9]+$/ ,"Username must not contain special character")


export const signUp = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"Password must be atleast 6 characters"})
})        
