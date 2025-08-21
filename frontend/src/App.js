import './App.css';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';
import Navbar from './pages/Navbar';

function AppWrapper() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}

function App() {
  const location = useLocation();

  // ✅ Hide Navbar only on dynamic `/:url` route
  const shouldHideNavbar = /^\/[^/]+$/.test(location.pathname) &&
                           location.pathname !== "/" &&
                           location.pathname !== "/auth" &&
                       
                           location.pathname !== "/history";

  return (
    <div className="App">
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/history" element={<History />} />
        <Route path="/:url" element={<VideoMeetComponent />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
