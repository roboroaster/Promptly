import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {connectToDB} from '@utils/database';
import User from '@models/user';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callback:{
        async session({session}){
            const sessionUser = await User.findOne({
                email : session.use.email
            })
    
            session.use.id = sessionUser._id.toString();
            return session;
    
        },
        async signIn({profile}){
            try {
                // serverless->lambda->dynamodb this means the api route runs only when called
                await connectToDB();
                // check if user exists
                const userExists = await User.findOne({
                    email:profile.email
                });
                // if not create user
                if (!userExists){
                     await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ","").toLowerCase(),
                        image: profile.picture,
                     })
                }
                return true;
            }catch (error){
                console.log(error);
                return false;
            }
    
        }
    }
    
})

export {handler as GET, handler as POST}