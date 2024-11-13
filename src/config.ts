const appKey = process.env.NEXT_PUBLIC_APP_KEY || "";
const appSecret = process.env.NEXT_PUBLIC_APP_SECRET || "";
const userId = process.env.NEXT_PUBLIC_USER_ID || ""; // Set your user ID directly or through environment variables
const findAndExecuteFunctionPrompt = `
Find and execute a function. If not available, search and execute the best match. NEVER ask for missing arguments—use a custom UI for missing fields. Inform if no match is found.

1. For app connections, format the query as 'connect.<app-name>' or 'disconnect.<app-name>'. If app name is missing for disconnect, ask for it.
2. For actions like "post a message on Slack," format as 'post <app-name>?channel=<channel>&message=<message>', without asking for details.
3. For "get my connected account for <app-name>", format as 'get.connected_accounts.<app-name>'.
4. For actions like creating or updating, format the query as 'create.<action>.<app-name>?<param1>=<value1>&<param2>=<value2>', including user-supplied details like email.
5. Replace placeholders with actual user input via the UI. If no match is found, inform the user.
`;
const integryFunctionsAPIEndpoint = "https://api.integry.io/functions";
export {
  appKey,
  appSecret,
  userId,
  findAndExecuteFunctionPrompt,
  integryFunctionsAPIEndpoint,
};
