import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4">Reach out to us for any queries or feedback.</p>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
