import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Redirect to FastAPI login route
    window.location.href = 'http://127.0.0.1:8000/login';
  }, []);

  return <p>Redirecting to FastAPI login...</p>;
};

export default Chatbot;
