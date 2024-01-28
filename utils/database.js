import mongoose from 'mongoose';
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strichQuery',true);

    if(isConnected){
        console.log('mongodb is already conntected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'share_prmopt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('mongodb connected');
    } catch (error) {
        console.log(error);
        
    }
}