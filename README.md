# 📚 Knowledge Cafe

Welcome to the **Knowledge Cafe**, a modern web application designed for users to read, bookmark, and manage educational blog content. Grab a virtual coffee and expand your mind!

---

## ✨ Features

* **Read Educational Blogs:** Explore a variety of insightful and educational articles.
* **Bookmark Feature:** Save interesting blogs for later reading.
* **Remove from Bookmarks:** Easily manage your saved list.
* **Mark as Read:** Track your progress by marking articles as completed.
* **Reading Time Tracker:** Each blog displays an estimated reading time.
* **Total Reading Time Calculation:** Mark a blog as read, and the site dynamically calculates and updates your cumulative reading time.

---

## 🛠️ Technology Stack

This project is built using a modern and efficient stack for rapid development and clean component architecture.

* **Frontend Framework:** **React**
* **Styling:** **Tailwind CSS** (Utility-first CSS framework)
* **Component Library:** **daisyUI** (A Tailwind CSS component library)

---

## 🚀 Setup and Installation

Follow these steps to get the project running on your local machine.

### Prerequisites

* Node.js (v14+)
* npm or yarn

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL_HERE]
    cd knowledge-cafe
    ```
2.  **Install dependencies:**
    ```bash
    npm install 
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  The application should now be running at `http://localhost:5173` (or the port specified by your development environment).

---

## ⚠️ Current Status & Known Issues

This project is currently in the initial development phase.

* **Responsiveness:** The layout is **not yet fully responsive**. For the best experience, please view the application on a **large screen or desktop device.**
* **Data Persistence:** Currently, **no database is being used**. All data (blogs, bookmarks, total reading time) is managed locally within the application state and will **reset upon page refresh** or closing the browser.

---

## 🔮 Future Enhancements

* Implement a backend (e.g., Firebase, MongoDB) for user accounts and data persistence.
* Full mobile and tablet responsiveness across all views.
* Filtering and search functionality for blogs.
* User ability to post their own educational blogs.