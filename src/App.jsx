import { Outlet } from 'react-router-dom';
// import Header from './components/Header'
// import Nav from './components/NavTabs';
import Footer from './components/Footer'
import './App.css'
import NavTabs from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavTabs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

