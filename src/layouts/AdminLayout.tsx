import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/Header/AdminHeader';
import { useAdminSelector } from '../services/hook';
import { AdminState } from '../services/store';
import DashboardLayout from './DashboardLayout';

export default function AdminLayout() {
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);
  if (!isSignedIn) {
    return (
      <div>
        <AdminHeader />
        <Outlet />
      </div>
    );
  }
  return <DashboardLayout />;
}
