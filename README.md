# HR ERP System Module

This project is a mini HR ERP (Enterprise Resource Planning) system module designed to manage employee records and provide basic analytics. The module offers two main roles: Admin and Employee, each with specific features.

## Features

### Admin Role

- Employee Management:
  - Create, Read, Update, and Delete (CRUD) employee records.
- Analytics Dashboard:
  - View basic analytics such as total employees and headcount by department.
  - Display analytics using simple charts.
- Employee List:
  - Table to view all employees with options to edit or delete records

### Employee Role

- Profile Management:
  - View personal details.
  - Update profile information.

### Authentication

- Login Page:
- Allows login as either Admin or Employee (mock authentication is implemented).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (14.18+ or 16+)
- npm or yarn

## Installation

1. Clone the repository:

```
git clone https://github.com/LivingHopeDev/ERP-frontend.git

cd ERP-frontend
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev

```

## Project Functionality

### Login Page

- Authentication for Admin and Employee roles.
- Separate dashboards are shown based on the role.

### Admin Dashboard

- Add Employee:

  - A form to add new employee records.

- Employee List:

  - A table listing all employees with options to edit or delete records.

- Analytics:

  - Display total employees and headcount by department in a chart.

### Employee Dashboard

- View Profile:
  - View personal details such as name, email, and department.
- Update Profile:
  - A form to update profile details.

## Technologies Used

- Frontend Framework: React with Vite
- State Management: Zustand
- Charts: Any lightweight chart library (e.g., Chart.js or Recharts)
- Backend:RESTFUL API
