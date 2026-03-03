import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import { loginSchema } from "./app/schema"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "./data/user"
import bcrypt from 'bcrypt';

 
export default { 
    providers:[

        //STRATEGY 1 :CREDENTIALS PROVIDER FOR NORMAL EMAIL PASSWORD LOGIN
        Credentials({
               async authorize(credentials:any){

                const validatedFields=loginSchema.safeParse(credentials);

                if(validatedFields.success){
                    const {email ,password}= validatedFields.data;

                    const user = await getUserByEmail(email);

                    if(!user || !user.password){
                        return null; //google and github acccounts do not have passwords
                    }

                    const passwordsMatch= await bcrypt.compare(password , user.password);
                    if(passwordsMatch) return user;


                }
                return null;
               }

               
        }) ,

        //STRATEGY 2: OAUTH PROVIDERS
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]

} satisfies NextAuthConfig