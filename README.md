# URL Shortener

A simple URL shortener application built with Node.js, Express, MongoDB, and EJS.

## Description

This application allows users to shorten long URLs into shorter, more manageable links. It uses MongoDB to store the original URLs along with their shortened counterparts. The application also keeps track of the number of clicks each shortened URL receives.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/url-shortener.git
```

2. Install the dependencies:

```bash
cd url-shortener
npm install
```
The application will be running at http://localhost:5000.

# Usage
- Visit [http://localhost:5000](http://localhost:5000) in your web browser.
- Enter the long URL you want to shorten in the input field.
- Click the "Shorten" button.
- The application will generate a shortened URL for you.
- Copy the shortened URL and share it with others.
- When someone visits the shortened URL, they will be redirected to the original long URL.

# Files

- package.json: Contains the project metadata and dependencies.
- server.js: The main server file that handles the routing and database connection.
- models/shortUrl.js: The Mongoose schema for the shortened URLs.
- views/index.ejs: The EJS template for rendering the main page.

# Dependencies

- express: 4.19.2
- ejs: 3.1.10
- mongoose: 8.3.2
- shortid: 2.2.16

# Dev Dependencies

- nodemon: 3.1.0

3. Make sure you have MongoDB installed and running on your machine.

4. Start the server:

```bash
npm run devStart
```
