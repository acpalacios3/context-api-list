## 1.  Project Description

Todo App is a React application that allows users to manage a list of tasks (To-Do List).
The application uses Context API to share information between components and localStorage to save user data in the browser.

## 2. Features

* Add Todo: Add new tasks.
* Complete Todo: Mark tasks as completed.
* Edit Todo: Modify an existing task.
* Delete Todo: Remove a task.
* Filter Todos: Filter tasks by status (All, Active, and Completed).
* Clear Completed: Remove all completed tasks.
* Dark / Light Mode: Switch between dark and light themes.
* Persistence: Save tasks and the selected theme in localStorage.

## 3. Technologies Used

* React,JavaScript,Context API,React Hooks, CSS: Style the application.
* localStorage: Store data in the browser.
* Vite: Development tool used to run and build the project.

## 4. Concepts:

Context API allows components to share information without manually passing props through multiple component levels.
1. TodoContext: Manages the tasks and their related functions.
2. ThemeContext: Manages the application's visual theme.

Custom Hooks are reusable functions that help organize and share application logic.

1. useTodos: Provides access to the Todo Context.
2. useTheme: Provides access to the Theme Context.
3. useLocalStorage: Synchronizes React state with the browser's local storage.

Persistence Layer

The application uses localStorage to preserve information even when the user refreshes or closes the browser.

The application stores two values:
* items: The list of tasks.
* theme: The selected theme (light or dark).
When the application starts, it attempts to retrieve the previously saved data.

 ## 5. Installation and Execution

* Install the dependencies:
npm install

* Start the development server:
npm run dev

* Open the local URL provided by Vite in your browser.

