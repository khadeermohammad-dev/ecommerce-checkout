# E-Commerce Checkout Application

## Overview

This project is a responsive E-Commerce Checkout Application built using React and Vite. The application allows users to enter shipping details, select a payment method, review their order summary, and validate form inputs before completing checkout.

The project follows a clean component-based architecture to improve maintainability, readability, and scalability.

---

## Features

* Customer Information Form
* Shipping Address Form
* Payment Method Selection
* Order Summary Section
* Form Validation
* Responsive Design
* Reusable React Components
* Clean Folder Structure

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS3
* HTML5

---

## Folder Structure

```text
src
├── components
│   ├── CheckoutForm.jsx
│   ├── InputField.jsx
│   ├── OrderSummary.jsx
│   ├── PaymentSelector.jsx
│   └── ErrorMessage.jsx
│
├── data
│   └── paymentMethods.js
│
├── utils
│   └── validation.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Approach

The application was designed using a modular architecture.

### Components

Each UI section is separated into individual reusable components to keep the code organized and maintainable.

### Data Management

Static payment method data is stored separately inside the data folder.

### Validation

Validation logic is centralized inside the utils folder to avoid duplication and improve reusability.

### Styling

Custom CSS is used to create a clean, modern, and responsive checkout experience.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd ecommerce-checkout
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Learning Outcomes

* Understanding React component architecture
* Managing form state using React
* Implementing form validation
* Creating reusable UI components
* Organizing projects using a scalable folder structure
* Building responsive user interfaces

---

## Future Enhancements

* Shopping Cart Integration
* API-based Checkout
* Authentication Support
* Payment Gateway Integration
* Order History Management

---

## Author

Khadeer Mohammad

Frontend Development Assignment
