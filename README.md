# 📝 React Task Manager

A sleek task management webapp built with React and Tailwind CSS. This project goes beyond a basic to-do app by implementing a clean UI, local data persistence, and dynamic component-based state management. (More features soon :D)

🔗 **[View Live Demo on Vercel](https://adystral-task-manager.vercel.app/)**

## ✨ Features

*   **Complete CRUD Functionality:** Seamlessly create, read, update, and delete tasks.
*   **Persistent Storage:** Utilizes browser `localStorage` and the `useEffect` hook to ensure your tasks survive page refreshes.
*   **Dynamic UI Sorting:** Tasks automatically filter and jump between "Pending" and "Completed" sections based on their active state.
*   **Decentralized Edit State:** Features a custom, auto-focusing inline edit menu managed by localized component state.
*   **Polished UX/UI:** Includes empty state placeholders, conditional button disabling, and smooth hover/active transitions.
*   **Responsive Design:** Fully responsive layout styled exclusively with Tailwind CSS utility classes.

## 🛠️ Tech Stack

*   **Framework:** React (Vite)
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Utilities:** `tailwind-merge` (for dynamic class compilation)

# 🗺️ Roadmap / Future Enhancements

    [ ] Implement specific deadlines and timestamps using Date.now().

    [ ] Add task prioritization levels (High, Medium, Low) with sorting logic.

    [ ] Integrate an active Pomodoro timer to track time spent on individual tasks.

    [ ] Migrate from localStorage to Firebase/Supabase for cross-device Google Login sync.

Designed and developed by Aditya Raj 😀
