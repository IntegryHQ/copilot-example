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
import { renderFunctionUI, predictFunction, getIntent } from "../helpers";

export default function Home() {
  useIntegryCopilotKitIntegration();
  return (
    <div className="flex items-center justify-center min-h-screen">
      Integry Marketplace
    </div>
  );
}

function useIntegryCopilotKitIntegration() {
  const generalContext = useCopilotContext();
  const messagesContext = useCopilotMessagesContext();
  const context = { ...generalContext, ...messagesContext };

  const [integry, setIntegry] = useState<IntegryJS | null>(null);
  const [hash, setHash] = useState("");

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
            integry.isConnected(appName).then((authorization_id: string) => {
              if (authorization_id) {
                integry.disconnect(authorization_id).then((response: any) => {
                  handler(response);
                });
              } else {
                handler("Already disconnected.");
              }
            });

            return <div>Disconnecting {appName}...</div>;
          case "connect":
            appName = args.query.split(".")[1];
            integry.isConnected(appName).then((authorization_id: string) => {
              if (authorization_id) {
                handler("Already connected.");
              } else {
                integry.connect(appName).then((response: any) => {
                  handler("Connected successfully.");
                });
              }
            });

            return <div>Connecting {appName}...</div>;
          default:
            predictFunction(appKey, hash, userId, true, true, args.query)
              .then((data) => {
                if (data.functions.length === 0) {
                  handler("No appropriate function found.");
                  return;
                }
                integry
                  .isConnected(data.functions[0].meta.app.name)
                  .then((authorization_id: string) => {
                    /**
                     * returns the authorization_id if the app is connected
                     * otherwise returns false
                     */
                    if (authorization_id) {
                      renderFunctionUI(integry, data.functions[0], handler);
                    } else {
                      integry
                        .connect(data.functions[0].meta.app.name)
                        .then((response: any) => {
                          renderFunctionUI(integry, data.functions[0], handler);
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
