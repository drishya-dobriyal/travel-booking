# Travel Booking App

This is a simple travel booking application that allows users to submit their travel preferences and view the submitted form data. The project consists of a frontend application and a backend server.

## Problem Statement

The goal of this project is to create a two-page web application where users can fill out a travel booking form on the first page and view the submitted form data on the second page. The backend server should provide two JSON API endpoints, one for storing form submissions and another for retrieving existing form submissions.

## Frontend

The frontend application is responsible for displaying the travel booking form and rendering the submitted form data.

### Pages

1. **Booking Form Page**: This page contains a form where users can enter their travel details.

   - Name: User's name.
   - Email Address: User's email address.
   - Where do you want to go?: A dropdown menu with the options: India, Africa, Europe.
   - No. of travellers: Number of travellers.
   - Budget Per Person: Budget per person in dollars.
   - Submit Button: Submits the form data.

2. **Booking Details Page**: This page displays all the submitted form data.
   - It retrieves the form submissions from the backend API and renders them in a presentable format.

## Backend

The backend server handles the storage and retrieval of form submissions using JSON API endpoints.

### JSON API Endpoints

1. **Submit Form Data**: POST `/api/create-booking`

   - Accepts form data in JSON format.
   - Stores the submitted form data in a database.
   - Responds with a success message or appropriate error status.

2. **Get Form Submissions**: GET `/api/fetch-all-booking`
   - Retrieves the existing form submissions from the database.
   - Responds with the list of form submissions in JSON format.

## Prerequisites

Before running the application, make sure you have the following software installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/)

Ensure that Node.js and MongoDB are properly set up and configured on your machine before proceeding with the application setup.

## Setup and Installation

To run the application locally, please follow these steps:

1. Clone the project repository: `git clone https://github.com/drishya-dobriyal/travel-booking`
2. Navigate to the project directory: `cd travel-booking`
3. Set up the backend server:
   - Navigate to the backend directory: `cd express-server`
   - Install the dependencies: `npm install`
   - Configure the database connection and environment variables.
   - Start the backend server: `npm start`
4. Set up the frontend application:
   - Navigate to the frontend directory: `cd frontend`
   - Install the dependencies: `npm install`
   - Start the frontend development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to access the travel booking application.
