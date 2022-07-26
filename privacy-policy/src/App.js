import './App.css';
import ScreenAppBar from './headers/Appbar';
import HomePage from "./pages/HomePage.js";
import PrivacyPolicyPage  from './pages/PrivacyPolicyPage';
import { HashRouter as Router, Routes , Route } from 'react-router-dom';

const App = () => {
  // Add Routers and Switches here for Privacy 
  // First page: HomePage
  // Second page: Privacy Policy

  return (
    <div className='App'>
      <ScreenAppBar />
      <Router>
        <Routes>
          <Route exact path="/">
            <Route path= "/" element={<HomePage />}/>
          </Route>
          <Route exact path="/privacyPolicy">
            <Route path="/privacyPolicy" element={<PrivacyPolicyPage />}/>
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
