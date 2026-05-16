import { ConvexHttpClient } from 'convex/browser';

const client = new ConvexHttpClient('https://pleasant-rhinoceros-140.convex.cloud');

async function test() {
  try {
    const args = {
      fullname: "Test User",
      email: "test@example.com",
      message: "Testing production rate limit",
      read_at: null,
      tag: "casual"
    };

    console.log("Calling first time...");
    try {
        await client.mutation("apis/post/insertCasualContact:createCasualContact", args);
    } catch (e) {
        console.log("First call threw:", e.message);
    }

    console.log("Calling second time...");
    await client.mutation("apis/post/insertCasualContact:createCasualContact", args);
    console.log("Second call succeeded??");
  } catch (error) {
    console.log("Second call threw an error:");
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Data:", error.data);
  }
}

test();
