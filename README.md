
# Arena Vendor Management API

A backend-only API built with Node.js, Express, and MongoDB for managing arenas, pickup slots, vendors, assignments, and menu items.

## Features

- Admin and Vendor roles with JWT-based authentication
- Arena creation with pickup slots
- Vendor registration and menu management
- Vendor-slot assignment with conflict prevention
- Swagger documentation available at `/`


## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Auth
- Swagger for API docs


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

Create a `.env` file in the root with the following:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/arena-api
JWT_SECRET=
```

Or use the provided `sample.env` and add the values

### 4. Run the Server

```bash
npm run dev
```

Visit `http://localhost:3000/` for Swagger UI.


## Project Structure

```
arena-vendor-management-api/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── arenaController.js
│   │   ├── assignController.js
│   │   └── vendorController.js
│   ├── docs/
│   │   └── swagger.yaml
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── arena.js
│   │   ├── assignment.js
│   │   ├── menuItem.js
│   │   └── vendor.js
│   ├── routes/
│   │   ├── arena.js
│   │   ├── assign.js
│   │   ├── index.js
│   │   └── vendor.js
│   └── services/
│       ├── arenaService.js
│       └── vendorService.js
├── bin/
│   └── www
├── .env
├── .gitignore
├── package.json
├── README.md
```


## API Endpoints

All endpoints are prefixed with `/api`

- `POST /api/arena`
- `GET /api/arena/:id/vendors`
- `POST /api/vendor`
- `POST /api/vendor/:id/menu`
- `POST /api/assign`

See full documentation at `/`.


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, modify, and distribute this project for personal or commercial purposes without attribution.
