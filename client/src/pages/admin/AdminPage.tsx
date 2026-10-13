import { Link, Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <main>
      <aside>
        <Link to="/admin/add-card">Add Card</Link>
      </aside>

      <Outlet />
    </main>
  );
}
export default AdminPage;
