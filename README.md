# About [![CI/CD](https://github.com/ney-l/job-board/actions/workflows/main.yml/badge.svg)](https://github.com/ney-l/job-board/actions/workflows/main.yml)

![App landing page screenshot](./docs/landing-page-screenshot.png)
A Job Board app built using Next.js and TypeScript.

## Setup

Environment Variables:
Refer .env.example for how the environment variables file should look like.

- Create .env.local to run the server locally.
- Create .env.test to run the tests

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_API_MOCKING=true
```

## Tech Stack

Below is the tech stack that will be used to build this project, along with justifications for each tool or technology.

### Next.js

#### Why Next.js?

Next.js is a powerful React framework that abstracts complexities away from developers and allows for easy and efficient creation of modern web applications. Next.js offers multiple rendering strategies, including client-side rendering, server-side rendering, static site generation, and incremental static regeneration. It also allows for performance optimization through techniques such as code splitting, lazy loading, prefetching, and image optimization.

### TypeScript

#### Why TypeScript?

TypeScript is a popular superset of JavaScript that offers many benefits, especially for large applications. Code written in TypeScript is better documented than code written in vanilla JS, allowing for easier maintenance and refactoring. TypeScript also helps boost code editor's IntelliSense for intelligent code completion, hover information, signature information, and more, thereby improving productivity.

### ESLint

#### Why ESLint?

ESLint is a popular linting tool for JavaScript/TypeScript that analyzes source code and detects potential issues in the codebase. It can be configured with different plugins and rules to adapt the linter to the application's specific needs, thereby ensuring code quality and consistency.

### Prettier

#### Why Prettier?

Prettier is a great tool for formatting code in a consistent manner across the entire codebase. It enforces a consistent coding style, which is important for maintainability and readability.

### Husky

#### Why Husky?

Husky is a tool that enables static code analysis checks to run automatically before committing to the repository. This helps ensure that code quality and consistency are maintained throughout the project.

### PNPM

#### Why PNPM?

PNPM is a package manager that offers several advantages over other package managers such as npm and Yarn. PNPM provides faster installation and updates, reduced disk space usage, and improved security. It achieves these benefits by using a shared cache for dependencies, which means that if multiple projects use the same dependencies, they only need to be installed once. This can greatly reduce installation and update times, especially for large projects with many dependencies. PNPM also automatically verifies the integrity of dependencies during installation, which can help prevent security vulnerabilities from being introduced into the project.

## Chakra UI

Why Chakra UI?

Chakra UI provides developers with a powerful set of tools and components that help streamline the UI development process, improve accessibility, and ensure a consistent and performant user experience. It comes with pre-made components with great accessiblity defaults out of the box and a powerful theming system to customize the look and feel of the application with ease, making it easier to maintain a consistent brand identity and adapt to changing design requirements. Chakra UI is designed with performance in mind, using techniques such as lazy loading and code splitting to ensture that the application loads quickly and is responsive to user interactions. It also has a great community support.

## App Specifications

Below are the specifications for this Job Board app

### User Authentication and Authorization:

- Implement user registration, login, and logout functionalities.
- Utilize JWT tokens for user authentication.
- Store the user authentication token in browser storage.
- Implement protected routes that require user authentication.
- Implement user roles and permissions (e.g., admin and regular users).

### Job Posting Management:

- Implement a "Create Job" form that allows users to submit job postings. The form should include fields such as job title, company, location, job type (full-time, part-time, etc.), description, and requirements.
- Implement a "Job List" view that displays a list of all job postings, including pagination and filtering options.
- Allow users to view job details by clicking on a job in the "Job List" view.
- Implement a "Job Edit" form that allows users to edit an existing job posting.
- Implement the ability to delete job postings.

### User Management (for admin users):

- Implement a "User List" view that displays a list of all users, including pagination and filtering options.
- Allow admin users to view user details by clicking on a user in the "User List" view.
- Implement a "User Edit" form that allows admin users to edit user information (e.g., name, email, role, etc.).
- Implement the ability for admin users to delete user accounts.

### Frontend Architecture:

- Utilize the Next.js library to build the frontend application.
- Use a suitable library for state management.
- Utilize Next.js for handling routing and navigation.
- Implement reusable components for common UI elements, such as buttons, forms, and modals.

### Backend Architecture:

- Implement a RESTful API to handle data retrieval and manipulation for job postings and user accounts.
- Use an appropriate database to store job postings and user account data.
- Implement proper error handling and validation for API requests.
- Ensure secure access to protected API endpoints using authentication tokens.

### Testing:

- Implement unit tests for individual components and functions.
- Implement integration tests for the interaction between components and API endpoints.

### Deployment:

- Deploy the frontend and backend applications to appropriate hosting platforms.

### Documentation:

- Provide clear documentation for the application's architecture and features.
- Include instructions for setting up the development environment, running tests, and deploying the application.
