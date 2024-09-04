import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex items-center">
      <div className="flex-shrink-0">
        <img
          src="https://your-image-url.com/food-delivery-icon.png"
          alt="Food Delivery"
          className="h-8 w-8"
        />
      </div>
      <ul className="flex ml-auto space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
