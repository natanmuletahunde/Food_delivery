import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex justify-between items-center">
        <li className="flex-grow">
          <Link to="/" className="text-white">Food Delivery</Link>
        </li>
        <li className="ml-4"><Link to="/">Home</Link></li>
        <li className="ml-4"><Link to="/menu">Menu</Link></li>
        <li className="ml-4"><Link to="/about">About</Link></li>
        <li className="ml-4"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
