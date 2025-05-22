# Arena Vendor Management API

A scalable, secure backend API built with Node.js, Express, and MongoDB for managing arenas, pickup slots, vendors, assignments, and menu items.

## Features

- Admin and Vendor roles with JWT-based authentication
- Arena creation with pickup slots
- Vendor registration and menu management
- Vendor-slot assignment with conflict prevention
- Pagination for arena vendor listing
- Centralized error handling and validation
- Swagger documentation at `/docs`
- Jest tests with Supertest for API routes


## Tech Stack

- Node.js, Express.js
- MongoDB (Mongoose)
- JWT for Auth
- Swagger for API Docs
- Joi for Validation
- Helmet, xss-clean, mongo-sanitize, rate-limit for Security
- Jest + Supertest for Testing


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Huzaifa-Asif/arena-vendor-management-api.git
cd arena-vendor-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/arena-api
JWT_SECRET=supersecrettoken
```

### 4. Run the Server

```bash
npm run dev
```

Visit [http://localhost:3000/docs](http://localhost:3000/docs) for Swagger UI.


## Project Structure

```
arena-vendor-management-api/
├── bin/                    # Startup script
├── src/
│   ├── app.js              # Main App
│   ├── config/             # DB connection
│   ├── constants/          # Roles and Statuses
│   ├── controllers/        # Request Handlers
│   ├── docs/               # Swagger Docs
│   ├── middleware/         # Auth, RBAC, Error
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # Express Routers
│   ├── services/           # Business Logic
│   └── validators/         # Joi Schemas
├── tests/                  # Jest Tests
├── sample.env
├── .env
├── .gitignore
├── package.json
├── README.md
```


## API Endpoints

All endpoints are prefixed with `/api`

- `POST /api/arena` – Create Arena
- `GET /api/arena/:id/vendors` – List Assigned Vendors (with `?page` & `?limit`)
- `POST /api/vendor` – Create Vendor
- `POST /api/vendor/:id/menu` – Add Menu Item
- `POST /api/assign` – Assign Vendor to Slot


## Running Tests

```bash
npm test
```


## Database Schema

You can view the interactive ERD and database relationships here:

[View Database Diagram](https://dbdocs.io/huzaifa8580/arena-vendor-management-api?view=relationships)


## Sample API Payloads

Use these examples to test your API endpoints from Swagger UI. In some cases, you will need to replace placeholder ObjectIds (`arenaId`, `vendorId`, `pickupSlotId`) with actual IDs retrieved from your database (e.g., via MongoDB Compass or Robo 3T).

### POST `/api/arena`

```json
{
  "name": "Summer Food Festival",
  "date": "2024-08-10",
  "pickupSlots": [
    { "name": "North Gate", "capacity": 100 },
    { "name": "VIP Lounge", "capacity": 30 },
    { "name": "Main Entrance", "capacity": 50 }
  ]
}
```

### POST `/api/vendor`

```json
{
  "name": "Tasty Bites",
  "email": "tasty@bites.com",
  "status": "active"
}
```

### ✅ POST `/api/assign`

> Replace `arenaId`, `vendorId`, and `pickupSlotId` with real ObjectIds from your DB.

```json
{
  "arenaId": "64f8b6c4f1abc12345678901",
  "vendorId": "64f8b6e9c7efc23456789012",
  "pickupSlotId": "64f8b70ad1f9a34567890123"
}
```

### ✅ POST `/api/vendor/{id}/menu`

> Replace `{id}` in the path with a real vendor ID from your DB.

```json
{
  "title": "Grilled Chicken Sandwich",
  "category": "Main Course",
  "price": 8.99,
  "isAvailable": true
}
```

### ✅ GET `/api/arena/{id}/vendors`

> Replace `{id}` with a real arena ID.

```
/api/arena/64f8b6c4f1abc12345678901/vendors?page=1&limit=10
```


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, modify, and distribute this project for personal or commercial purposes without attribution.
