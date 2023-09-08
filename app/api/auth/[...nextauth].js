import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import clientPromise from "../../../lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  
})