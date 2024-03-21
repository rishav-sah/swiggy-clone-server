# Swiggy Clone Server

A web server, built using Node.js, that mimics the data from the Swiggy API and exposes endpoints for easy access, thereby solving the CORS issue.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Deployment](#deployment---hosting-into-cloud)
- [Disclaimer](#disclaimer)


## Overview

Swiggy Clone Server is a Node.js web server designed to replicate the functionality of the Swiggy API. It helps solve the CORS (Cross-Origin Resource Sharing) issue by providing a proxy server that exposes endpoints for accessing restaurant and menu data.

## Installation

To install Swiggy Clone Server, follow these steps:

1.  Clone the repository:

```bash
git clone https://github.com/rishav-sah/swiggy-clone-server.git
```

2. Navigate to the project directory:

```bash
cd swiggy-clone-server
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
Create a `.env` file in the root directory of the project and add the following variables:
```bash
SWIGGY_MAIN_URL=https://www.swiggy.com/dapi/restaurants/list/v5
SWIGGY_MENU_URL=https://www.swiggy.com/dapi/menu/pl?page-type
PORT=3000
```
## Usage

To start the server, run the following command:

```bash
npm start
```
The server will start listening on the specified port (default is 3000).

## Endpoints
The Swiggy Clone Server exposes the following endpoints:

- `/api/restaurants`: Retrieves a list of restaurants based on latitude, longitude, and page type.
- `/api/menu`: Retrieves the menu of a specific restaurant based on its ID and other parameters.

Both endpoints support GET requests and require certain query parameters. Please refer to the source code (`index.js`) for more details on the required parameters.

## Deployment - Hosting into Cloud

Once you have tested the swiggy-clone-server locally, you can deploy it to a production environment by following these steps.

1. Create an account on [Render](https://render.com/) if you haven't already.
2. Click on the `New +` button and select `Web Service` from the dropdown menu.
3. `Connect` to your own GitHub repository (node server that you have created your own) which you want to deploy.
4. In the `Settings` tab, scroll down to the `Environment Variables` section and add `PORT` environment variables to `3000`.
5. Wait for the deployment to finish. Once it's done, you should see a success message and a link to our server URL. For Instance: `http://AssignedServerName.onrender.com`
6. Click on the link URL to test our server.

## Disclaimer
This project, Swiggy Clone Server, is created solely for educational purposes. It serves as a demonstration of how to build a server that mimics the functionality of the Swiggy API. The use of terms like "Swiggy," "Swiggy API," and "Swiggy Clone" is purely for descriptive purposes to convey the nature of the project.

It's important to note that this project is not affiliated with Swiggy and does not intend to misrepresent or violate any of Swiggy's guidelines or policies. We respect the intellectual property rights of Swiggy and encourage users to do the same.

This project should be used responsibly and ethically. Any unauthorized or inappropriate use of this project to mimic or replicate Swiggy's services for commercial purposes is discouraged.

We do not endorse or support any activities that may harm the reputation or interests of Swiggy or any other parties. Users of this project are advised to comply with all applicable laws, regulations, and terms of service when using or modifying the code provided herein.

