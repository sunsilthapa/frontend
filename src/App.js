import './App.css';
import{BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Registerpage from './pages/Registerpage';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
    <Navbar/>
    <ToastContainer/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        {/* Admin routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>

      </Routes>
    </Router>
  );
}

export default App;
