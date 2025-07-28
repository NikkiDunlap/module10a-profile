// Profile.jsx
// This component displays a musician's profile using props and toggles extra info using state.

import { useState } from 'react';

function Profile({ name, occupation, funFact, quote }) 
{
  // This state determines whether the quote is shown
  const [showQuote, setShowQuote] = useState(false);

  // Toggle function to change showQuote from true to false and vice versa
  function handleToggle() 
  {
    setShowQuote(!showQuote);
  }

  return (
    <div style={{
      border: '2px solid #333',
      padding: '24px',
      borderRadius: '10px',
      maxWidth: '450px',
      margin: '40px auto',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f8f8',
      color: 'black'
    }}>
      <h2>{name}</h2>
      <h4>{occupation}</h4>
      <p><strong>Fun Fact:</strong> {funFact}</p>

      {showQuote && (
        <p style={{ fontStyle: 'italic', marginTop: '16px' }}>
          “{quote}”
        </p>
      )}

      <button 
        onClick={handleToggle}
        style={{
          marginTop: '16px',
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#007BFF',
          color: 'black',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {showQuote ? 'Hide Quote' : 'Show Quote'}
      </button>
    </div>
  );
}

export default Profile;
