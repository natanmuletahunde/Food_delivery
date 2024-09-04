import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Navbar />
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">We are passionate about delivering the best food experience.</p>
      </section>
      <Footer />
    </div>
  );
}

export default About;
