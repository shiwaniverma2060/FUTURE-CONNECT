# 🌐 Future Connect

Future Connect is a modern, social media-style platform that allows users to connect through posts, engage via claps (like Medium), and manage personalized profiles. Built using Next.js, Firebase, and Tailwind CSS, it offers seamless authentication, profile customization, global feeds, and real-time interactions.

## 🚀 Technologies Used

- Next.js 15
- React 19
- Firebase Authentication & Firestore
- Tailwind CSS 4
- TypeScript
- date-fns

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/shiwaniverma2060/FUTURE-CONNECT.git
   cd FUTURE-CONNECT
2. Install dependencies:
     cd future-connect-frontend
     npm install

3. Create a .env.local file in the root of future-connect-frontend and add your Firebase credentials:
           init
            Copy
            Edit
            NEXT_PUBLIC_FIREBASE_API_KEY=...
           NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
            NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
            NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
           NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
            NEXT_PUBLIC_FIREBASE_APP_ID=...
            Start the development server:

4. To run:
      fontend:npm run dev(open http://localhost:3000 in your browser.)
      backend:to run backend specially -> [node server.js] (http://http://localhost:5050/)

## Key Features:
        Secure login & signup with Firebase Auth
        Create and update personal profiles (name, photo, bio)
        Post creation with text and optional image support
        Global feed displaying posts from all users
         Like system (Medium-style clap — users can like multiple times)
        Add and view comments on posts
        Real-time updates using Firestore
         Edit/Delete functionality for own posts
         Fully responsive and clean UI using Tailwind CSS
##Known Limitations
        Image upload is not implemented because Firebase Storage requires enabling the Pay-as-you-go billing plan.
        Likes are stored only as total count — no tracking of who liked.
        No advanced features like notifications, user search, or chat yet.
        Security rules are basic and should be hardened before production deployment.


