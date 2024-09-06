import { defineSchema, defineTable } from "convex/server"
// to check data types
import { v } from "convex/values"

export default defineSchema({
    users: defineTable({
        tokenIdentifier: v.string(),
        email: v.string()
        // if you wanna search users by token identifier this is the way
        // index (<name> , [<field>])
    }).index("by_token", ["tokenIdentifier"])
})