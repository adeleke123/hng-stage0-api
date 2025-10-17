## HNG Stage 0 Dynamic Profile Endpoint

Here is the `README.md` file that covers all the required submission criteria.

````markdown
# HNG Backend Stage 0: Dynamic Profile Endpoint

## Project Description

This project is the solution for the HNG Backend Track Stage 0 task. It implements a simple, dynamic RESTful API endpoint using **Node.js** and **Express**.

The core function of the API is to serve a JSON response containing my personal profile information (name, email, stack) along with two dynamically generated fields:
1.  **A live UTC timestamp** (updated on every request).
2.  **A random cat fact** fetched from a third-party API (`https://catfact.ninja/fact`).

This task demonstrates competence in setting up a basic web server, consuming external APIs, handling asynchronous operations, and formatting structured JSON responses.

---

## 🚀 Getting Started (Run Locally)

Follow these steps to set up and run the project on your local machine.

### Prerequisites

You must have **Node.js** (version 16 or higher is recommended) and **npm** (Node Package Manager) installed on your system.

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPO_LINK_HERE>
cd hng-stage0-api
````

### 2\. Install Dependencies

Use npm to install the required packages listed below.

```bash
npm install
```

### 3\. Run the Server

Start the application using the `start` script defined in `package.json`.

```bash
npm start
```

The server will start running, usually on port 3000 (unless the environment variable `PORT` is set). You will see a confirmation message in your terminal:

```
Server listening at http://localhost:3000
Test endpoint: http://localhost:3000/me
```

-----

## 🛠️ Key Dependencies

This project relies on the following npm packages:

| Dependency | Purpose |
| :--- | :--- |
| **`express`** | Fast, unopinionated, minimalist web framework for Node.js (Handles routing and server setup). |
| **`axios`** | Promise-based HTTP client (Used to fetch the cat fact from the external API). |

-----

## 🌐 Required Endpoint

The dynamic profile data can be accessed via a `GET` request to the following path:

| HTTP Method | Path | Description |
| :--- | :--- | :--- |
| **GET** | `/me` | Returns profile information, a dynamic UTC timestamp, and a random cat fact. |

### Example Response Structure:

```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "A random fact about cats fetched from the Cat Facts API."
}
```

-----


## Deployed app

https://hng-stage0-api.up.railway.app/me
