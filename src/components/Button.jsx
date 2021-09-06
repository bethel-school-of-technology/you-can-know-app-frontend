import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  child,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
  ? buttonSize 
  : SIZES[0];

  return (
    <Link to='/create-new-app' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {child}
      </button>
    </Link>
  );
};


// import React from 'react';
// import './Button.css';
// import {Link} from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline'];

// const SIZES = ['btn--medium', 'btn--large'];


// export const Button = ({
//     child, 
//     type, 
//     onClick, 
//     buttonStyle, 
//     buttonSize
// }) => {

// const checkbuttonSize = SIZES.includes(buttonSize) 
// ? buttonSize 
// : SIZES[0];

// const checkbuttonStyle = STYLES.includes(buttonStyle) 
// ? buttonStyle 
// : STYLES[0];

// return (
//     <Link to='create-new-account' className="btn=mobile">
//     <Button> className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}
//     onClick={onClick}
//     type={type}
// {child}
//     </Button>
//     </Link>
//     );
// };