# OWASP Juice Shop - Login Form

This repository contains a simple front-end login form inspired by OWASP Juice Shop, complete with dual-layer validation (client-side and server-side).

## Features
- **UI Design**: Styled with Juice Shop's dark theme aesthetics.
- **Client-Side Validation**:
  - Prevents empty form submissions.
  - Verifies email includes `@`.
  - Enforces minimum password length of 8 characters.
- **Server-Side Validation**:
  - Validates request payloads on the Express server (`/api/login`) to guard against bypassed browser scripts.

## Setup & Execution

1. Clone this repository:
   ```bash
   git clone [https://github.com/your-username/juice-shop-login-form.git](https://github.com/your-username/juice-shop-login-form.git)
   cd juice-shop-login-form