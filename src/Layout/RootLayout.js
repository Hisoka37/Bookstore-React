import { NavLink, Outlet } from 'react-router-dom';
import avatar from '../assets/avatar.png';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Bookstore CMS</h1>
          <NavLink to="/">BOOKS</NavLink>
          <NavLink to="Categories">CATEGORIES</NavLink>
          <img src={avatar} alt="avatar" />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
