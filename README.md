# To-Do List Application

This is a simple To-Do List application built with **React** using **Vite** as the build tool. The project demonstrates the use of React for building a user interface and Tailwind CSS for styling.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Build for Production](#build-for-production)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Add new to-do items.
- Mark to-do items as completed.
- Delete to-do items.
- Responsive design using Tailwind CSS.

## Tech Stack

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast build tool for modern web projects.
- **Tailwind CSS** - A utility-first CSS framework.
- **TypeScript** - Programming language.

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

You will need to have the following installed:

- **Node.js** (v16.x or later) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)

### Installation

1. **Clone the repository**  
   Open your terminal and run the following command to clone the project:

   ```bash
   git clone https://github.com/tasmin75/react-todo-application
   ```

2. **Install dependencies**  
   Run the following command to install all the project dependencies:
   ```bash
   npm install
   ```
   or if you're using **yarn**:
   ```bash
   yarn
   ```

### Running the Application

Once the dependencies are installed, start the local development server with:

```bash
npm run dev
```

or if using **yarn**:

```bash
yarn dev
```

This will start the Vite development server, and you should be able to access the app at [http://localhost:5173](http://localhost:5173).

### Build for Production

To create an optimized production build, run the following command:

```bash
npm run build
```

or with **yarn**:

```bash
yarn build
```

This will create a `dist/` folder with the production build files, which you can deploy to any static hosting service.

### Preview the Production Build

To preview the production build locally, you can use the following command after building:

```bash
npm run preview
```

or with **yarn**:

```bash
yarn preview
```

### Folder Structure

```bash
├── public          # Public assets (e.g., images, icons)
├── src             # Application source code
│   ├── assets      # Static assets
│   ├── components  # Reusable components
│   ├── App.jsx     # Main component
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── .gitignore      # Files to ignore in Git
├── index.html      # HTML template
├── package.json    # Project dependencies and scripts
├── README.md       # Project documentation
└── vite.config.js  # Vite configuration
```
