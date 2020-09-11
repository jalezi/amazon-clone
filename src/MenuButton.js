import React from 'react';
import './MenuButton.css';
import { useStateValue } from './StateProvider';

function MenuButton({ onClick }) {
  const [{ open = false }, dispatch] = useStateValue();

  console.log(open);

  const handleClick = () => {
    dispatch({
      type: 'MENU_BUTTON_CLICK',
    });
  };

  const styles = {
    lineTop: {
      transform: open ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      transform: open ? 'translateX(-16px)' : 'none',
    },
    lineBottom: {
      transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };
  return (
    <div
      className="container"
      onClick={
        onClick
          ? onClick
          : () => {
              handleClick();
            }
      }>
      <div className="line" style={{ ...styles.line, ...styles.lineTop }} />
      <div className="line" style={{ ...styles.line, ...styles.lineMiddle }} />
      <div className="line" style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
}

export default MenuButton;
