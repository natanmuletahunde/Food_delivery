import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This will render the current route's component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
