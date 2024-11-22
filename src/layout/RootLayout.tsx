import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import OrdersPage from '../pages/OrdersPage';

export default function RootLayout() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/contacts"
        element={<ContactsPage />}
      />
      <Route
        path="/orders"
        element={<OrdersPage />}
      />
    </Routes>
  );
}
