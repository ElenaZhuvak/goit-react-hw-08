# Contact Book

A modern, full-stack contact management application built with React and Redux, featuring user authentication and a beautiful, responsive UI.

## 🌟 Features

- **User Authentication**: Secure registration and login system
- **Contact Management**: Create, read, update, and delete contacts
- **Real-time Search**: Filter contacts by name or phone number
- **Persistent Storage**: User sessions and data persist across browser sessions
- **Responsive Design**: Beautiful UI that works on all device sizes
- **Toast Notifications**: User-friendly feedback for all actions
- **Protected Routes**: Secure access to contact management features

## 🚀 Demo

[Live Demo](https://contact-book-react-lake.vercel.app/)

## 🛠️ Technologies Used

### Frontend
- **React 18.3** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Formik & Yup** - Form handling and validation
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **Axios** - HTTP client

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Redux Persist** - State persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/contact-book.git
cd contact-book
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppBar/         # Navigation bar
│   ├── AuthNav/        # Authentication navigation
│   ├── Contact/        # Individual contact card
│   ├── ContactForm/    # Add new contact form
│   ├── ContactList/    # List of contacts
│   ├── EditContactModal/ # Edit contact modal
│   ├── Footer/         # Footer component
│   ├── Layout/         # Main layout wrapper
│   ├── LoginForm/      # Login form
│   ├── Navigation/     # Main navigation
│   ├── PrivateRoute/   # Protected route wrapper
│   ├── RegistrationForm/ # Registration form
│   ├── RestrictedRoute/ # Restricted route wrapper
│   ├── SearchBox/      # Contact search
│   └── UserMenu/       # User menu
├── pages/              # Page components
│   ├── ContactsPage/   # Contacts management page
│   ├── HomePage/       # Landing page
│   ├── LoginPage/      # Login page
│   ├── NotFound/       # 404 page
│   └── RegistrationPage/ # Registration page
├── redux/              # Redux store configuration
│   ├── auth/          # Authentication slice
│   ├── contacts/      # Contacts slice
│   ├── filters/       # Filter slice
│   └── store.js       # Store configuration
└── helpers/            # Utility functions
```

## 🔐 Authentication

The application uses JWT-based authentication with the following endpoints:

- **Register**: `POST /users/signup`
- **Login**: `POST /users/login`
- **Logout**: `POST /users/logout`
- **Refresh**: `GET /users/current`

## 📝 API Integration

The app integrates with the Connections API:

**Base URL**: `https://connections-api.goit.global`

### Endpoints:
- `GET /contacts` - Fetch all contacts
- `POST /contacts` - Create new contact
- `DELETE /contacts/:id` - Delete contact
- `PATCH /contacts/:id` - Update contact

## 🎨 UI/UX Features

- **Gradient Backgrounds**: Modern gradient designs throughout the app
- **Smooth Animations**: Hover effects and transitions
- **Modal Dialogs**: Clean modal for editing contacts
- **Responsive Layout**: Mobile-first design approach
- **Loading States**: Visual feedback during data operations
- **Error Handling**: User-friendly error messages

## 🔒 Security Features

- Protected routes for authenticated users
- Restricted routes for non-authenticated users
- Token-based authentication
- Automatic token refresh
- Secure logout functionality

## 🌐 Deployment

The application can be deployed on various platforms. A `vercel.json` configuration is included for Vercel deployment:

```bash
npm run build
```

Then deploy the `dist` folder to your hosting service.

## 📱 Contact Format

Contacts must follow this format:
- **Name**: 3-50 characters
- **Phone**: +[12 digits] (e.g., +380123456789)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 👤 Author

Your Name
- GitHub: [@ElenaZhuvak](https://github.com/ElenaZhuvak)
- LinkedIn: [Olena Zhuvak](https://www.linkedin.com/in/olena-zhuvak-9a8703125/)

## 🙏 Acknowledgments

- [GoIT](https://goit.global/) for the API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [DaisyUI](https://daisyui.com/) for UI components
- [React Icons](https://react-icons.github.io/react-icons/) for icons

---