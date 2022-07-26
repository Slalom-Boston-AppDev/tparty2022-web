import './App.css';
import ScreenAppBar from './headers/Navbar';
import HomePage from "./pages/HomePage.js";
import PrivacyPolicyPage  from './pages/PrivacyPolicyPage';
import { HashRouter as Router, Routes , Route } from 'react-router-dom';

const App = () => {
  // Add Routers and Switches here for Privacy 
  // First page: HomePage
  // Second page: Privacy Policy

  return (
    <div className='App'>
      {/* <ScreenAppBar /> */}
      <Router>
        <ScreenAppBar />
        <Routes>
          <Route exact path= "/" element={<HomePage />}/>
          <Route path="/info" element={<PrivacyPolicyPage />}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
