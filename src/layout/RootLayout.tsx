import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import OrdersPage from '../pages/OrdersPage';
import ContactProfile from '../components/contacts/ContactProfile';

export default function RootLayout() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
        index
      />
      <Route
        path="contacts"
        element={<ContactsPage />}
      >
        <Route
          path=":id"
          element={<ContactProfile />}
        />
      </Route>
      <Route
        path="orders"
        element={<OrdersPage />}
      />
    </Routes>
  );
}
