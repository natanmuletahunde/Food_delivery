import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Food Delivery</h1>
        <p className="mt-4 text-lg">Delivering your favorite meals to your doorstep.</p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
