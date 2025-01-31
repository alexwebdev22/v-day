import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showYesMessage, setShowYesMessage] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);
  const [noButtonClicked, setNoButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    setShowHeader(false);
    setShowYesMessage(true);
  };

  const handleNoClick = () => {
    setShowHeader(false);
    setNoButtonClicked(true);
    setTimeout(() => {
      setNoButtonClicked(false);
      setShowNoMessage(true);
    }, 10000);
  };

  const handleHover = (e) => {
    if (noButtonClicked) {
      e.target.style.position = 'absolute';
      e.target.style.top = `${Math.random() * 80}%`;
      e.target.style.right = `${Math.random() * 80}%`;
    }
  };

  const handleCelebrationClick = () => {
    navigate('/celebration');
  };

  return (
    <div className='container'>
      {showHeader && <h1 className='header1'>Will you be my valentine?💖</h1>}

      {showYesMessage && (
        <>
          <h2 className='response1'>
            Yuppiiiiiiiii Yaayyyyyyyyyy yaayyyy youuu are my valentine!💖
          </h2>
          <button
            className='yes-button'
            onClick={handleCelebrationClick}
          >
            Press here for a surprise!
          </button>
        </>
      )}

      {showNoMessage && (
        <>
          <h2 className='response2'>
            You are forced t be my valentineeeeeeee.💖
          </h2>
          <button
            className='no-button'
            onClick={handleCelebrationClick}
          >
            Press here for a surprise!
          </button>
        </>
      )}

      {!showYesMessage && !showNoMessage && (
        <div className='buttons'>
          <button
            className='yes-button'
            onClick={handleYesClick}
          >
            Yes!
          </button>
          <button
            className={`no-button ${noButtonClicked ? 'moving' : ''}`}
            onClick={handleNoClick}
            onMouseEnter={handleHover}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
