import { integryFunctionsAPIEndpoint } from "./config";
import {
  FieldMetaUI,
  FieldMeta,
  TemplateField,
  Parameters,
  Data,
} from "./types/types";
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
export function renderFunctionUI(
  integry: any,
  func: any,
  handler: any,
  query?: string
) {
  let renderUI = true;
  if (func.meta.type === "QUERY") {
    const requiredFields = extractRequiredFieldsWithNoDefaultValues(func);
    if (Object.keys(requiredFields).length === 0) {
      renderUI = false;
      const requestObject = createRequestObject(func);
      integry
        .invokeFunction(requestObject)
        .then((response: any) => {
          closePopup();
          handler(response);
        })
        .catch((error: any) => {
          closePopup();
          handler("There was an error invoking the function.");
        });
    }
  }

  if (renderUI) {
    integry
      .renderFunctionUI(func.name, func.arguments)
      .then((result: any) => {
        integry
          .invokeFunction(result)
          .then((response: any) => {
            closePopup();
            if (response.output === "") {
              if (["200", "201", "202"].includes(response.network_code)) {
                handler("The function was invoked successfully.");
              }
            } else {
              handler(response);
            }
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

export function extractRequiredFieldsWithNoDefaultValues(data: Data) {
  // Extract the list of required fields from the `required` array
  const requiredFields = data.parameters.required || [];

  // Initialize an array to store the result
  const result: { [key: string]: TemplateField } = {};

  // Iterate over the properties of the parameters object
  Object.entries(data.parameters.properties).forEach(
    ([fieldKey, fieldValue]) => {
      const isRequired = requiredFields.includes(fieldKey);
      const hasNoDefaultValue = !fieldValue?.meta?.ui?.default_value; // No default value
      const isNotHidden = fieldValue?.meta?.ui?.field?.type !== "HIDDEN"; // Ensure the field is visible

      // If the field is required, visible, and has no default value, add it to the result
      if (isRequired && hasNoDefaultValue && isNotHidden) {
        result[fieldKey] = fieldValue;
      }
    }
  );

  // Return the filtered fields
  return result;
}

export function createRequestObject(func: any) {
  // Initialize the request object
  const requestObject: any = {
    method: "POST",
    url: `https://api.integry.io/functions/${func.name}/`,
    headers: {
      "Content-Type": "application/json",
    },
    args: {},
  };

  // Extract the properties from the parameters
  const { properties } = func.parameters;

  // Loop through the properties and extract those with default values
  Object.entries(properties).forEach(([key, field]: [string, any]) => {
    // Skip hidden fields
    if (field?.meta?.ui?.field?.type === "HIDDEN") {
      return;
    }

    // Get the default value if present
    const defaultValue = field?.meta?.ui?.default_value;

    // Only add fields with default values
    if (defaultValue !== undefined) {
      // Set the field to its default value in the `args` object
      requestObject.args[key] = defaultValue;
    }
  });

  return requestObject;
}
