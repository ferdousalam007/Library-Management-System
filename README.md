# Library Management System

## Project Name & Description
The **Library Management System** is designed to help libraries manage their collections of books, users, and transactions efficiently. It provides features such as book tracking, user management, and transaction logging.

## Live URL
[Live Deployment](https://library-management-system-one-nu.vercel.app/)  

## Technology Stack & Packages
- **Backend**: Node.js, Express
- **Database**: Prisma
- **Authentication**: bcrypt
- **Environment Configuration**: dotenv
- **Others**: cookie-parser, cors, http-status

### Development Tools
- **TypeScript**: For type safety and modern JavaScript features
- **ts-node-dev**: For running TypeScript files directly

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <https://github.com/ferdousalam007/Library-Management-System.git>
   ```
2. **Navigate to the project directory**
   ```bash
   cd Library Management System
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Setup environment variables**
   - Create a `.env` file in the root directory and add necessary configuration.
5. **Run the application**
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run prod
     ```

## Key Features & Functionality
- **Book Management**: 
  - Add new books to the library's collection with details such as title, author, genre, and publication date.
  - Update existing book information to keep the library's catalog current.
  - Delete books that are no longer available or needed from the library's collection.
  - View detailed information about each book, including availability status.

- **User Management**: 
  - Register new library members and manage their profiles.
  - Assign roles to users, such as member or staff, with varying access levels.
  - Update user information as needed to maintain accurate records.
  - Deactivate or delete user accounts when necessary.

- **Transaction Logging**: 
  - Record and track the borrowing and returning of books by library members.
  - Maintain a history of all transactions for auditing and reporting purposes.
  - Generate reports on book circulation and user activity to inform library management decisions.

## Known Issues/Bugs
- No known issues at the moment. 


