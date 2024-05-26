import React, { useState } from 'react';
import './App.css';
import background from './public/images/background.png';
import wix1 from './public/images/wix1.gif';
import wix2 from './public/images/wix2.gif';
import wix3 from './public/images/wix3.gif';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
const App = () => {


  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'emails'), {
        email: email,
        timestamp: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
      // Close the modal after submission
      setShowModal(false);
      setEmail('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero">
        <h1>EMPOWERING INNOVATORS</h1>
        <div className='hero-text'>
        <p>
          🚀 Create compelling startup reports and pitch decks with Startupdf!
          Join us as we revolutionize the startup ecosystem and unleash the
          power of innovation. Be the first to experience our groundbreaking
          platform!
        </p>
        </div>
        <button className="early-access-button" onClick={toggleModal}>
          Get Early Access
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>EMPOWERING INNOVATORS 🚀</h2>
            <p>
              Join our community and stay ahead of the curve with the latest AI
              innovations, startup insights, and funding opportunities.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email here*"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <p className="error">{emailError}</p>}
              <button type="submit" className="get-updates-button">Get Updates</button>
            </form>
          </div>
        </div>
      )}
      <div
        className="background-gif background"
        style={{ backgroundImage: `url(${wix1})` }}
      ></div>
      <div
        className="background-gif background-animated"
        style={{ backgroundImage: `url(${wix2})` }}
      ></div>
      <div
        className="background-gif background-overlay"
        style={{ backgroundImage: `url(${wix3})` }}
      ></div>
    </div>
  );
};

export default App;
