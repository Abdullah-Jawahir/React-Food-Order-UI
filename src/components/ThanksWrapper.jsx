import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const ThanksWrapper = ({ isPlaceOrderClicked }) => {

  const [clipPath, setClipPath] = useState('circle(0px at center)');
  useEffect(() => {

    let timeoutId;

    if (isPlaceOrderClicked) {
      setClipPath('circle(1000px at center)');

      // Set a timeout to reset the clipPath after 2500 milliseconds (2.5 second)
      timeoutId = setTimeout(() => {
        setClipPath('circle(0px at center)');
      }, 2500);

      // Clean up the timeout to avoid memory leaks
      return () => {
        clearTimeout(timeoutId)
      };
    }
  }, [isPlaceOrderClicked]);

  const wrapperStyle = {

    clipPath: clipPath,
  }

  return (
    <div className='wrapper' style={wrapperStyle}>
      <p className="message-box">
        Thank You for purchasing our Food!
        Have a <span>Nice Day!</span>
      </p>
    </div>
  )
}

ThanksWrapper.propTypes = {

  isPlaceOrderClicked: PropTypes.bool.isRequired,
}