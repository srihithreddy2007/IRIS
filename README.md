# Lost & Found Portal — Team Iris

A secure REST API for a campus Lost & Found Portal built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

## Features

- JWT authentication with HTTP-only cookies
- Password hashing with bcrypt (12 salt rounds)
- Role-based access control (USER / ADMIN)
- CRUD operations for lost/found reports
- Search, filter, and pagination
- Request validation with express-validator
- Centralized error handling
- Admin moderation and dashboard stats

## Tech Stack

| Layer          | Technology           |
| -------------- | -------------------- |
| Runtime        | Node.js              |
| Framework      | Express.js           |
| Database       | MongoDB + Mongoose   |
| Authentication | JWT + bcryptjs       |
| Validation     | express-validator    |
| Logging        | morgan               |

## Project Structure

```
team_iris/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── adminController.js    # Admin operations
│   │   ├── authController.js     # Auth (register/login/logout)
│   │   └── reportController.js   # Report CRUD
│   ├── middleware/
│   │   ├── auth.js               # JWT verify + role authorize
│   │   ├── errorHandler.js       # Centralized error handler
│   │   └── validate.js           # Request validation rules
│   ├── models/
│   │   ├── Report.js             # Report schema
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── adminRoutes.js        # Admin endpoints
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── reportRoutes.js       # Report endpoints
│   ├── utils/
│   │   └── ApiError.js           # Custom error class
│   └── app.js                    # Express app setup
├── seed/
│   └── seed.js                   # Database seeder
├── postman/
│   └── Lost_and_Found_Portal.postman_collection.json
├── server.js                     # Entry point
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd team_iris

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### Environment Variables

| Variable      | Description                        | Default                                        |
| ------------- | ---------------------------------- | ---------------------------------------------- |
| `NODE_ENV`    | Environment mode                   | `development`                                  |
| `PORT`        | Server port                        | `5000`                                         |
| `MONGODB_URI` | MongoDB connection string          | `mongodb://localhost:27017/lost-and-found-portal` |
| `JWT_SECRET`  | Secret key for JWT signing         | *(change in production)*                       |
| `JWT_EXPIRE`  | Token expiration                   | `7d`                                           |
| `COOKIE_EXPIRE` | Cookie expiration (days)         | `7`                                            |

### Seed Database

```bash
npm run seed
```

This creates sample users and reports for testing.

### Run the Server

```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:5000`

## Test Credentials

| Role  | Email              | Password  |
| ----- | ------------------ | --------- |
| ADMIN | admin@campus.edu   | admin123  |
| USER  | john@campus.edu    | user123   |
| USER  | jane@campus.edu    | user123   |
| USER  | bob@campus.edu     | user123   |

## API Endpoints

### Health Check
| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| GET    | `/api/health`  | API health check   |

### Authentication (`/api/auth`)
| Method | Endpoint   | Access  | Description              |
| ------ | ---------- | ------- | ------------------------ |
| POST   | `/register`| Public  | Register a new user      |
| POST   | `/login`   | Public  | Login and receive JWT    |
| POST   | `/logout`  | Private | Logout (clear cookie)    |
| GET    | `/me`      | Private | Get current user profile |

### Reports (`/api/reports`)
| Method | Endpoint         | Access          | Description              |
| ------ | ---------------- | --------------- | ------------------------ |
| GET    | `/`              | Private         | List reports (search/filter/paginate) |
| POST   | `/`              | Private         | Create a new report      |
| GET    | `/my-reports`    | Private         | Get own reports          |
| GET    | `/:id`           | Private         | Get single report        |
| PUT    | `/:id`           | Private (Owner) | Update own report        |
| DELETE | `/:id`           | Private (Owner) | Delete own report        |
| PATCH  | `/:id/resolve`   | Private (Owner) | Mark report as resolved  |

### Admin (`/api/admin`)
| Method | Endpoint              | Access | Description              |
| ------ | --------------------- | ------ | ------------------------ |
| GET    | `/stats`              | ADMIN  | Dashboard statistics     |
| GET    | `/reports`            | ADMIN  | All reports (incl. removed) |
| PUT    | `/reports/:id/status` | ADMIN  | Update report status     |
| DELETE | `/reports/:id`        | ADMIN  | Remove inappropriate report |

### Query Parameters (GET `/api/reports`)

| Param    | Type   | Description                              |
| -------- | ------ | ---------------------------------------- |
| `type`   | String | Filter by `LOST` or `FOUND`             |
| `status` | String | Filter by `ACTIVE` or `RESOLVED`        |
| `category` | String | Filter by category                     |
| `search` | String | Full-text search on title, description, location |
| `sortBy` | String | Field to sort by (e.g., `date`, `createdAt`) |
| `order`  | String | Sort order: `asc` or `desc`             |
| `page`   | Number | Page number (default: 1)                |
| `limit`  | Number | Items per page (default: 10)            |

## Postman Collection

Import the Postman collection from `postman/Lost_and_Found_Portal.postman_collection.json`.

The collection covers:
- ✅ Success scenarios for all endpoints
- ❌ Failure scenarios (validation, auth, authorization)
- 🔐 JWT stored automatically via collection scripts

## Business Rules

1. Each report identifies whether an item is **Lost** or **Found**
2. Reports contain: item name, description, location, date, and status
3. Users can only modify/delete their **own** active reports
4. Only administrators can moderate (update status, remove) all reports
5. Reports have three statuses: `ACTIVE`, `RESOLVED`, `REJECTED`
6. Admin removal/rejection sets status → `REJECTED`

## Error Handling

All errors return a consistent JSON format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

| Status Code | Meaning                 |
| ----------- | ----------------------- |
| 200         | Success                 |
| 201         | Created                 |
| 400         | Bad Request / Validation Error |
| 401         | Unauthorized            |
| 403         | Forbidden               |
| 404         | Not Found               |
| 500         | Internal Server Error   |

## Team

**Team Iris**

## License

MIT
