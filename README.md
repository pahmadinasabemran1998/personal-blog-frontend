# Personal Blog Frontend

A dynamic, interactive React + Vite frontend for a personal blog platform. Users can create, edit, delete, and view blog posts with a seamless interface and persistent data storage.

## Features

- Create new posts with title and content
- Edit existing posts
- Delete posts
- View all posts dynamically
- Form validation with user-friendly error messages
- Persistent storage via backend API
- Protected dashboard using authentication
- Loading and empty state UI

## Tech Stack

- React
- Vite
- Axios for API calls
- Vanilla CSS for styling
- React Router for navigation
- Context API for authentication state

## Setup

1. Clone the repo:
```bash
git clone https://github.com/pahmadinasabemran1998/personal-blog-frontend.git
cd personal-blog-frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file with:
```bash
VITE_API_URL=http://localhost:5000
```
4. Start the dev server:
```bash
npm run dev
```
5. Visit http://localhost:5173 in your browser.

## Backend Integration
This frontend works with the [Personal Blog Backend](https://github.com/pahmadinasabemran1998/personal-blog-backend), which handles authentication, post management, and data persistence.