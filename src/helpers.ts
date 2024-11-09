import { integryFunctionsAPIEndpoint } from "./config";
/**
 * A helper function use to force close the Integry dialogs.
 */
export function closePopup() {
  const popup = document.querySelector('[id^="x-integry-modal"]');
  if (popup) {
    popup.remove();
  }
}

/**
 * Helper function that actually calls the Integry SDK's renderFunctionUI method
 * and chains it to further call the invokeFunction method.
 */
export function renderFunctionUI(integry: any, func: any, handler: any) {
  integry
    .renderFunctionUI(func.name, func.arguments)
    .then((result: any) => {
      integry
        .invokeFunction(result)
        .then((response: any) => {
          closePopup();
          handler(response);
        })
        .catch((error: any) => {
          closePopup();
          handler("There was an error invoking the function.");
        });
    })
    .catch((error: any) => {
      closePopup();
      handler("There was an error invoking the function.");
    });
}

export async function predictFunction(
  appKey: string,
  hash: string,
  userId: string,
  predictFunction: boolean,
  predictArguments: boolean,
  prompt: string
) {
  // Construct the URL with the provided parameters
  const url = `${integryFunctionsAPIEndpoint}/?app_key=${encodeURIComponent(
    appKey
  )}&hash=${encodeURIComponent(hash)}&user_id=${encodeURIComponent(
    userId
  )}&predict_function=${predictFunction}&prompt=${encodeURIComponent(
    prompt
  )}&include=meta&predict_arguments=${predictArguments}`;

  try {
    const response = await fetch(url, {
      method: "GET", // Default method is GET
    });

    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }

    const data = await response.json(); // Parse the JSON from the response
    return data; // Return the data
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Rethrow the error if needed
  }
}

/**
 * Returns the possible intent from user query
 *
 */
export function getIntent(query: string) {
  if (
    query.includes("disconnect") &&
    query.split(".")[1] &&
    query.split(".").length === 2
  ) {
    return "disconnect";
  } else if (
    query.includes("connect") &&
    query.split(".")[1] &&
    query.split(".").length === 2
  ) {
    return "connect";
  } else {
    return "default";
  }
}
