# 🏋️ Fitlog — Gym Workout Library & Companion

Fitlog is a modern, interactive web application designed for fitness enthusiasts to explore exercise libraries, plan daily workouts, and manage personal fitness goals.

---

## 🚀 Features

- **Interactive Workout Exploration:** Browse through a curated list of popular gym exercises complete with muscle groups, equipment, duration, and ratings.
- **Dynamic Plan & Wishlist Management:** Add or remove workouts to/from your Today's Plan or Saved list in real-time with instant UI updates and persistent storage using Browser LocalStorage.
- **Toast Notifications & Bulk Actions:** Get instant feedback via React Toastify alerts when adding or removing items, marking exercises as done, or managing your daily routine.
- **Live Metrics Tracking:** Automatically calculates total exercises, cumulative duration, and total calories burned based on your active plan.
- **Advanced Sorting & Filtering:** Easily re-sort your workouts by duration, calories, or rating using the interactive dropdown.

---

## 💻 Technologies Used

- **Next.js (App Router)** (React Framework & Dynamic Routing)
- **Tailwind CSS & DaisyUI** (Styling & Responsive UI Components)
- **TypeScript** (Type Safety & Scalability)
- **React-Toastify** (For real-time pop-up notifications)
- **JSON / External API** (Data source for exercises)

---

## ❓ React Concepts & Interview Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly inside JavaScript files. It is used in React because it makes the code cleaner, more readable, and easier to write UI structures without having to use complex `createElement` functions.

### 2. What is the difference between props and state?
- **Props (Properties):** These are read-only inputs passed from parent components to child components to configure or display data. They are immutable (cannot be changed by the child).
- **State:** This is internal data managed within a component. It can change over time based on user actions or events, and changing it triggers a re-render of the component.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is a React Hook that lets you add state variables to functional components.  
*Usage in this project:* I used `useState` to manage the active tabs (Today's Plan / Saved), sorting options, and the user's selected workout stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON/API data?
`useEffect` lets you perform side effects (like data fetching, subscriptions, or localStorage synchronization) in functional components after rendering.  
*Why it's needed:* Fetching data or syncing state with browser storage is an asynchronous side effect. Running it inside `useEffect` ensures it happens correctly on component lifecycle events without causing infinite re-renders.

### 5. Why does every item in a `.map()` list need a unique key prop?
React uses keys to efficiently identify which items in a list have changed, been added, or been removed. Unique keys help React optimize rendering performance and maintain correct component states.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the ability to render different UI elements or components based on certain conditions (like if statements or ternary operators).  
*Example used in this project (Empty State Message):*
```tsx
{sortedList.length === 0 ? (
  <div className="text-center text-zinc-400">NOTHING HERE YET</div>
) : (
  <div>{/* Render workout cards */}</div>
)}