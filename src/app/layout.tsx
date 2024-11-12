import type { Metadata } from "next";
import localFont from "next/font/local";
import "@copilotkit/react-ui/styles.css";
import "./globals.css";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup, CopilotChat } from "@copilotkit/react-ui";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Integry AI Integration Demo",
  description: "Integry AI Integration Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CopilotKit runtimeUrl="/api/copilotkit" showDevConsole={false}>
          {children}
          <CopilotChat
            instructions={
              "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
            }
            labels={{
              title: "Popup Assistant",
              initial:
                "How can I help? You can ask me to connect to any app, or take action on it. For example, you can ask me to create a new contact in your CRM like Salesforce or HubSpot.",
            }}
            defaultOpen={true}
          />
        </CopilotKit>
      </body>
    </html>
  );
}
