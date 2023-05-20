# Connexa - Social Networking Site

Connexa is a social networking site that aims to connect students from different colleges and universities. It provides a platform for students to interact, make friends, share blogs, and stay updated with events happening in their educational community. This README file provides an overview of the project, its features, and the technologies used.

## Features

- **User Authentication**: Users can register and login to their accounts to access the site's features.
- **Profile Management**: Users can create and update their profiles, add profile pictures, and provide information about their educational background.
- **Friend Connections**: Users can connect with friends from different colleges, send friend requests, and accept/reject requests.
- **Explore**: Users can explore the site and discover other students from various colleges.
- **Events**: Users can view events organized by various colleges and universities.
- **Blogs**: Users can read and write blogs on various topics, share their thoughts, and engage in discussions.

## Tech Stack

The Connexa project is built using the following technologies:

### Frontend
- **React JS**: A popular JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling the application.

### Backend
- **Node.js**: A JavaScript runtime environment used for server-side development.
- **AWS S3**: Amazon Simple Storage Service is used for storing and retrieving user profile pictures and other media files.
- **MongoDB**: A NoSQL document database used for storing user data, profiles, events, and blog posts.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/connexa.git`
2. Install the required dependencies by running `npm install` in both the frontend and backend directories.
3. Create a `.env` file in the backend directory and add the necessary environment variables, such as MongoDB connection string, AWS S3 credentials, etc.
4. Start the backend server: `npm run start` or `node server.js` in the backend directory.
5. Start the frontend development server: `npm start` in the frontend directory.
6. Open your web browser and visit `http://localhost:3000` to access the Connexa site.

## Live Demo

You can visit our live website at [connexa.social](https://www.connexa.social) to explore the features, register an account, and connect with students from different colleges.

