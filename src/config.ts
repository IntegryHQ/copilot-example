const appKey = process.env.NEXT_PUBLIC_APP_KEY || "";
const appSecret = process.env.NEXT_PUBLIC_APP_SECRET || "";
const userId = "yasir@integry.io"; // Set your user ID directly or through environment variables
const findAndExecuteFunctionPrompt = `
Find and execute a function. If the user requests a function not available, search the function catalog and execute the best match. YOU MUST NEVER ask the user to provide any arguments you think are missing. The user will be provided with a custom UI where they can fill out any missing arguments themselves. Inform the user if no matching function is found.

When using the findAndExecuteFunction tool, never ask the user for missing arguments; they will fill them out in a custom UI.
If the user wants to disconnect an app but doesn't provide the app name, ask for it and format the query as disconnect.<app-name>.
If the user asks to connect to an app, obtain the app name and format the query as connect.<app-name>. Ensure the request is not to disconnect. Open an authentication window for the user to connect to the app. Once the window is closed, respond with "Your <app-name> account is connected."
If user has asked to get data from some application, e.g. get contacts etc then fromat the query as get.<app-name>.
`;
const integryFunctionsAPIEndpoint = "https://api.integry.io/functions";
export {
  appKey,
  appSecret,
  userId,
  findAndExecuteFunctionPrompt,
  integryFunctionsAPIEndpoint,
};
