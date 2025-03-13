import SignUpForm from './screen/auth/SignUpForm'
import { Route, Routes } from 'react-router-dom';
import Login from './screen/auth/Login';
import ResetPass from './screen/auth/ResetPass';
import VerifyOtp from './screen/auth/VerifyOtp';
import SetNewPassword from './screen/auth/SetNewPassword';
import Home from './screen/Home/Home';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const token = localStorage.getItem("token");

  console.log(token);
  return (
    <>
      <ScrollToTop />
    
    <Routes>
      {/* Public Routes */}
      {!token && (
        <>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
        </>
      )}
      {token && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </>
      )}
    </Routes>
    </>

  )
}

export default App