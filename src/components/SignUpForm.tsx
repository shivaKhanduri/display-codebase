import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/SignUpForm.css'; // Import signUpForm.css
import LOGO from "../assets/logo.png";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here, e.g., validation, API call
    console.log('Signing up with:', email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center"> {/* Using flexbox to vertically and horizontally center */}
      <div className="mt-5 formContainer"> {/* Adding margin top */}
        <div className="text-center mb-4"> {/* Centering the logo */}
          <img src={LOGO} alt="Logo" className="logo" />
        </div>
        
        <form onSubmit={handleSignUp} className="mt-4"> {/* Adding margin top to form */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control" // Adding bootstrap form-control class
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control" // Adding bootstrap form-control class
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-control" // Adding bootstrap form-control class
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button> {/* Adding bootstrap btn and btn-primary classes */}
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
