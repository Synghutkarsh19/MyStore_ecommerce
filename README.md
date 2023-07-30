# MYSTORE E-Commerce Website Project 

Welcome to our E-Commerce Website project built with ReactJS, HTML, CSS, Strapi API, and Stripe for payment processing. This project aims to provide an easy-to-use and efficient e-commerce platform for both customers and administrators.

![Project Screenshot](project_screenshot.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Introduction

This project is a full-fledged e-commerce website built using ReactJS as the frontend library to handle the user interface and interactions. Strapi API powers the backend, handling product data, user authentication, and order management. Stripe integration enables secure and reliable payment processing.

## Features

- Browse and search through a wide range of products
- Shopping cart functionality to add/remove products
- Checkout process with Stripe integration for secure payments

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Synghutkarsh19/MyStore_ecommerce.git
cd MyStore_ecommerce
```

2. Install the required dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory of the project and add the necessary environment variables:

```
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
REACT_APP_API_URL=your_strapi_api_url
```

4. Start the development server:

```bash
npm start
```

## Usage

1. Browse the website and add products to your cart.
2. Proceed to the checkout process.
3. Enter your shipping and payment details.
4. Complete the payment using the Stripe integration.

## Technologies Used

- ReactJS
- HTML
- CSS
- Strapi API
- Stripe for payment processing

