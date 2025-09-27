# Task 3: Web UI Forms

This task involves creating a web user interface (UI) frontend for the application developed in Task 1. The UI will be built using React 19, TypeScript, and Ant Design, and will allow users to interact with the REST API to manage "task" objects.

## Technologies Used

*   **Frontend Framework**: React 19
*   **Language**: TypeScript
*   **UI Library**: Ant Design

## Core Functionality

The web UI should provide the following capabilities:

*   **Create Records**: Allow users to create new "task" objects.
*   **Show Records**: Display a list of existing "task" objects.
*   **Search Records**: Enable searching for "task" objects based on various criteria.
*   **Delete Records**: Provide functionality to delete "task" objects.
*   **Run Commands**: Offer an interface to trigger the execution of shell commands associated with "task" objects.
*   **View Command Output**: Display the output of executed commands.

## Usability and Accessibility

Special attention must be paid to the usability and accessibility of the UI. This will be a major factor in the assessment of the frontend part of this task. Consider:

*   **Intuitive Navigation**: Easy-to-understand layout and flow.
*   **Clear Feedback**: Informative messages for user actions and system responses.
*   **Responsive Design**: The UI should work well across different screen sizes and devices.
*   **Accessibility Standards**: Adherence to WCAG guidelines for users with disabilities (e.g., keyboard navigation, ARIA attributes, proper color contrast).

## Project Structure (Expected)

*   `task-manager-ui/`: The main directory for the React application.
    *   `src/`: Source code for the React components, services, and utilities.
    *   `public/`: Public assets.
    *   `package.json`: Project dependencies and scripts.

## How to Access and Run the Project

1.  **Clone the Repository**: If you haven't already, clone this repository to your local machine.

    ```bash
    git clone <repository-url>
    cd task3-web-ui
    ```

2.  **Navigate to the `task-manager-ui` directory**: The React application will be located in the `task-manager-ui` subdirectory.

    ```bash
    cd task-manager-ui
    ```

3.  **Install Dependencies**: Install the necessary Node.js packages.

    ```bash
    npm install
    # or yarn install
    ```

4.  **Start the Development Server**: Run the application in development mode.

    ```bash
    npm start
    # or yarn start
    ```

5.  **Access the UI**: Once the development server is running, the UI will typically be accessible in your web browser at `http://localhost:3000` (or another port if configured differently).

## Copyright

Copyright © 2025 Kaiburr LLC. All rights reserved.
