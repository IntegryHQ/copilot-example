# Integry Copilot Chat Integration

This repository showcases an example of integrating **Integry** within a chat application using **Copilot**. The application demonstrates how to find and execute functions through a conversational interface, allowing users to interact with various applications seamlessly.

## Features

- **Dynamic Function Execution**: Users can request to connect or disconnect applications via the chat interface without manually providing parameters, enhancing user experience.
- **Custom UI for Parameter Input**: When additional parameters are required, the application provides a custom UI, allowing users to fill in necessary details easily.
- **Real-time Interaction**: The integration facilitates real-time execution of functions based on user queries, showcasing the capabilities of the Integry platform.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/IntegryHQ/copilot-example.git
   ```
2. Create a `.env` file on the root of your project and copy content from `dev.env` file
3. Fill in the variable values in `.env` file.
4. Run the application using:
   ```bash
   npm install && npm run dev
   ```
5. Visit the application on http://localhost:3000 in your browser.
6. You can now ask the chatbot to perform actions similar to:
   ```bash
   connect my Slack account
   disconnect my Mailchimp account
   send a message on Slack
   ```

## Demonstration

This project serves as a practical demonstration of how Integry can streamline workflows and enhance productivity in chat applications by automating tasks and integrating various services.
