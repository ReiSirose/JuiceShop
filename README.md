# OWASP Juice Shop - Login Form & Validation

This repository contains a lightweight, full-stack login application inspired by OWASP Juice Shop, built for **CSCE 477/500: Cybersecurity Risk (HW 2-B)**. It demonstrates dual-layer input validation (client-side and server-side) without relying on external npm dependencies.

---

## 🚀 Features

* **Juice Shop UI Theme:** Styled using CSS to mirror the OWASP Juice Shop dark-mode login interface.
* **Client-Side Validation (`public/app.js`):**
  * Prevents empty submissions.
  * Validates email format (ensures it contains `@`).
  * Enforces minimum password length (at least 8 characters).
* **Server-Side Validation (`server.js`):**
  * Re-verifies all submission data on the backend POST endpoint (`/api/login`).
  * Protects against attackers bypassing browser-based JavaScript validations using API tools (e.g., Postman, Curl).
* **Zero External Dependencies:** Built entirely with native Node.js core modules (`http`, `fs`, `path`).

---

## 📁 Repository Structure

```text
JuiceShop/
├── public/
│   ├── index.html       # UI interface for the login form
│   └── app.js           # Client-side validation & API fetch request logic
├── README.md            # Project documentation and setup guide
└── server.js            # Zero-dependency Node.js HTTP server & backend API