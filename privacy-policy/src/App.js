import Navbar from './Navbar';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
