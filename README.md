# Order Status Notification System

This project consists of a backend API and a frontend application that allows users to change the order status and receive push notifications when the order status is updated.

## Backend

### Setup

1. Clone this repository.
2. Navigate to the `backend` directory.
3. Install dependencies using npm:
`npm install`
3. Create a `.env` file based on the `.env.example` template and configure your environment variables.
4. Start the development server:
3. Create a `.env` file based on the `.env.example` template and configure your environment variables.
4. Start the development server:

### Usage

- Open your browser and navigate to the URL where the frontend application is hosted.
- You will see the current order status displayed on the screen.
- Click on the "Change Status" button to update the order status.
- Upon changing the order status, you will receive a push notification indicating the new status.

## Push Notification Service

You can use any push notification service of your choice for sending notifications to the frontend application. Some popular options include Firebase Cloud Messaging (FCM), Amazon Simple Notification Service (SNS), and OneSignal.

### Configuration

- Configure the push notification service credentials in the backend API code.
- Ensure that the frontend application is subscribed to receive push notifications from the configured service.


