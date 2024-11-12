const appKey = process.env.NEXT_PUBLIC_APP_KEY || "";
const appSecret = process.env.NEXT_PUBLIC_APP_SECRET || "";
const userId = "yasir@integry.io"; // Set your user ID directly or through environment variables
const findAndExecuteFunctionPrompt = `
Find and execute a function. If the function is not available, search the catalog and execute the best match. NEVER ask the user for missing arguments—use a custom UI where they can fill in missing fields themselves. Inform the user if no match is found.

1. Format the query as 'get.<app-name>', 'connect.<app-name>', or 'disconnect.<app-name>' based on the request.
2. If the app name is not provided for disconnect, ask for it and format the query as 'disconnect.<app-name>'.
3. For app connections, obtain the app name and format as 'connect.<app-name>'. Open an auth window, then respond with "Your <app-name> account is connected."
4. For actions like "post a message on Slack," format the query as 'post.<app-name>' and include details like 'message' and 'channel' as placeholders. Do NOT ask for these details directly. The UI will handle them, but include them in the query format (e.g., 'post.slack?channel=<channel>&message=<message>').
`;
const integryFunctionsAPIEndpoint = "https://api.integry.io/functions";
export {
  appKey,
  appSecret,
  userId,
  findAndExecuteFunctionPrompt,
  integryFunctionsAPIEndpoint,
};
