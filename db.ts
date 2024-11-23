import { connect } from "http2";
import mongoose,{ Mongoose } from "mongoose";
import { cache } from "react";

const MONGODB_URL = process.env.MONGODB_URL!;
interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose ={
        conn : null,
        promise : null
    };
};

export const Connect = async ()=>{
    if(cached.conn) return cached.conn;
    cached.promise || mongoose.connect(MONGODB_URL,{
        dbName: "FirstProject",
        bufferCommands: false,
        connectTimeoutMS: 300000,
    });
    cached.conn = await cached.promise;
    return cached.conn
}