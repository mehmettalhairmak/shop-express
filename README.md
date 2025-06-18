# Shop Express

A modern Express.js shop application built with TypeScript, featuring a clean architecture and best practices.

## Features

- 🛍️ **Shop Management**: Add and view products
- 🔐 **Admin Panel**: Secure admin routes for product management
- 📱 **Responsive Design**: Modern HTML views
- 🛠️ **TypeScript**: Full type safety
- 🎨 **Prettier**: Code formatting
- 🔍 **ESLint**: Code linting with TypeScript support

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shop-express
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Build and start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## Project Structure

```
src/
├── app.ts          # Main application entry point
├── routes/         # Route handlers
│   ├── admin.ts    # Admin routes
│   └── shop.ts     # Shop routes
└── views/          # HTML templates
    ├── 404.html
    ├── add-product.html
    └── shop.html
```

## Technologies Used

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Nodemon** - Development server

## License

ISC 