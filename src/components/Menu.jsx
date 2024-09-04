import Navbar from './Navbar';
import Footer from './Footer';

const menuItems = [
  { id: 1, name: 'Pizza', price: '$10' },
  { id: 2, name: 'Burger', price: '$8' },
  { id: 3, name: 'Sushi', price: '$15' },
];

function Menu() {
  return (
    <div>
      <Navbar />
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>
        <ul className="max-w-md mx-auto">
          {menuItems.map(item => (
            <li key={item.id} className="bg-white p-4 mb-4 shadow-lg">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Menu;
