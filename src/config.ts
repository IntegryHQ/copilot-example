const appKey = process.env.NEXT_PUBLIC_APP_KEY || "";
const appSecret = process.env.NEXT_PUBLIC_APP_SECRET || "";
const userId = process.env.NEXT_PUBLIC_USER_ID || ""; // Set your user ID directly or through environment variables
const findAndExecuteFunctionPrompt = `
Find and execute a function. If not available, search and execute the best match. NEVER ask the user for missing arguments—use a custom UI to handle missing fields. Inform the user if no match is found.

1. Format the query as 'connect.<app-name>' or 'disconnect.<app-name>' for app connection requests. If the app name is missing for disconnect, ask for it.
2. For app connections, obtain the app name and format as 'connect.<app-name>'. Open an auth window and respond with "Your <app-name> account is connected."
3. For actions like "post a message on Slack," format as 'post.<app-name>?channel=<channel>&message=<message>', without asking for these details directly.
4. For "get my connected account for <app-name>", format as 'get.connected_accounts.<app-name>'.
5. Replace placeholders with actual user input via the UI. If no matching function is found, inform the user.
`;
const integryFunctionsAPIEndpoint = "https://api.integry.io/functions";
export {
  appKey,
  appSecret,
  userId,
  findAndExecuteFunctionPrompt,
  integryFunctionsAPIEndpoint,
};
