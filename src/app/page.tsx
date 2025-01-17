"use client";

import {
  useCopilotAction,
  extract,
  useCopilotContext,
  useCopilotMessagesContext,
} from "@copilotkit/react-core";
import { useState, useEffect } from "react";
import { IntegryJS, Helpers } from "@integry/sdk";
import {
  appKey,
  appSecret,
  userId,
  findAndExecuteFunctionPrompt,
} from "../config";
import { FindAndExecuteFunctionArgs } from "../types/types";
import {
  renderFunctionUI,
  predictFunction,
  getIntent,
  findInQueryString,
} from "../helpers";

export default function Home() {
  const [integryRef, setIntegryRef] = useState<IntegryJS | null>(null); // State to store Integry object

  useIntegryCopilotKitIntegration(setIntegryRef);

  const handleOpenMarketplace = () => {
    if (integryRef) {
      integryRef.showApps();
    }
  };
  return (
    <div>
      <div className="flex menuBar justify-right flex-col sticky top-0 z-10">
        <div className="mt-4">
          {" "}
          {/* Adding margin-top to space the button from the text */}
          <button
            onClick={() => {
              handleOpenMarketplace();
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            App Marketplace
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-custom flex-col">
        <div className="mt-4">
          {" "}
          {/* Adding margin-top to space the button from the text */}
          <p>Integry AI Integration Demo</p>
        </div>
      </div>
    </div>
  );
}

function useIntegryCopilotKitIntegration(
  setIntegryRef: React.Dispatch<React.SetStateAction<IntegryJS | null>>
) {
  const generalContext = useCopilotContext();
  const messagesContext = useCopilotMessagesContext();
  const context = { ...generalContext, ...messagesContext };

  const [hash, setHash] = useState("");
  const [integry, setIntegry] = useState<IntegryJS | null>(null); // State to store Integry object

  let isPredictingFunction = false;

  useEffect(() => {
    /**
     * Initializing the Integry SDK object inside useEffect
     */
    Helpers.getAuthHash(userId, appSecret)
      .then((hash: string) => {
        const integry = new IntegryJS({
          appKey,
          hash,
          user: {
            userId: userId,
            apiKey: "",
          },
        });
        setHash(hash);
        setIntegry(integry);
        setIntegryRef(integry);
      })
      .catch((error: any) => {
        console.error("Error fetching auth hash:", error);
      });
  }, []);

  useCopilotAction({
    name: "findAndExecuteFunction",
    description: findAndExecuteFunctionPrompt,
    parameters: [
      {
        name: "query",
        description: "The query to search for a function",
        type: "string",
      },
    ],
    handler: async () => {},
    renderAndWait: ({
      args,
      handler,
      status,
    }: {
      args: FindAndExecuteFunctionArgs;
      handler: (response?: any) => void;
      status: string;
    }) => {
      if (status === "inProgress") {
        return <div>Loading...</div>;
      } else if (status === "executing") {
        if (integry === null) {
          return <div>Failed to initialize Integry SDK.</div>;
        }

        const intent = getIntent(args.query);
        let appName = "";

        switch (intent) {
          case "disconnect":
            appName = args.query.split(".")[1];
            const connectedAccountId = findInQueryString(
              args.query,
              "account_id"
            );
            integry.isAppConnected(appName).then((isConnected: boolean) => {
              if (isConnected) {
                integry
                  .disconnectApp(appName, connectedAccountId)
                  .then((response: any) => {
                    handler(response);
                  })
                  .catch((error: any) => {
                    handler("Failed to disconnect." + error.message);
                  });
              } else {
                handler("Already disconnected.");
              }
            });

            return <div>Disconnecting {appName}...</div>;
          case "connect":
            appName = args.query.split(".")[1];
            integry.isAppConnected(appName).then((isConnected: boolean) => {
              if (isConnected) {
                handler("Already connected.");
              } else {
                integry.connectApp(appName).then((response: any) => {
                  handler("Connected successfully.");
                });
              }
            });

            return <div>Connecting {appName}...</div>;

          case "get_connected_accounts":
            appName = args.query.split(".")[2];
            integry
              .getConnectedAccounts(appName)
              .then((connectedAccounts: any) => {
                if (connectedAccounts.length > 0) {
                  handler(connectedAccounts);
                } else {
                  handler(`No connected accounts found for: ${appName}`);
                }
              });

            return <div>Obtaining connected accounts... {appName}...</div>;

          default:
            if (isPredictingFunction) {
              return <div>Loading...</div>;
            }
            isPredictingFunction = true;
            predictFunction(appKey, hash, userId, true, true, args.query)
              .then((data) => {
                isPredictingFunction = false;
                if (data.functions.length === 0) {
                  handler("No appropriate function found.");
                  return;
                }
                integry
                  .isAppConnected(data.functions[0].meta.app.name)
                  .then((isConnected: boolean) => {
                    /**
                     * returns the authorization_id if the app is connected
                     * otherwise returns false
                     */
                    if (isConnected) {
                      renderFunctionUI(
                        integry,
                        data.functions[0],
                        handler,
                        args.query
                      );
                    } else {
                      integry
                        .connectApp(data.functions[0].meta.app.name)
                        .then((response: any) => {
                          renderFunctionUI(
                            integry,
                            data.functions[0],
                            handler,
                            args.query
                          );
                        });
                    }
                  });
              })
              .catch((error) => {
                // Handle any errors from the fetchFunctions call
                console.error("Fetch failed:", error);
              });

            return <div>Setting this up for you...</div>;
        }
      }
    },
  });
}
