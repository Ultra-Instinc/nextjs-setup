import { v } from "convex/values"
// mutation -> to edit values [all CRUDS]
// query -> to retrieve data
import { mutation, query } from "./_generated/server"

export const store = mutation({
    // args -> arguments
    args: {},
    // handler defines what we will do
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Called storeUser without authenticated user")
        }

        // check if user already stored
        const user = await ctx.db
            .query("users")
            .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier)).unique()

        // if user  exist return user ID
        if (user !== null) {
            return user._id
        }
        // if user doesn't exist -> we add him to the database
        const userId = await ctx.db.insert("users", {
            tokenIdentifier: identity.tokenIdentifier,
            email: identity.email!
        })
        return userId
    }
})