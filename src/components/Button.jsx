import { Link, useLocation } from 'react-router-dom';
import '../App.css';

export const Button = ({
  text,
  className = '',
  glow = true,
  link = null,
  icon = null,
  onMouseDown = null,
  onClick = null,
  target = '_self',
}) => {
  const location = useLocation();

  const classes = `${glow ? 'btn-glow' : 'btn'} ${className}`.trim();

  // Handle onClick buttons
  if (onClick) {
    return (
      <button
        className={classes}
        onClick={onClick}
        onMouseDown={onMouseDown}
        disabled={link !== null && link !== ''}
      >
        {text}
        {icon}
      </button>
    );
  }

  // Handle links from the root path
  if (location.pathname === '/' && link) {
    return (
      <button
        className={classes}
        onClick={() => window.open(link, target)}
        onMouseDown={onMouseDown}
      >
        {text}
        {icon}
      </button>
    );
  }

  // Handle React Router links
  if (link) {
    return (
      <Link
        to={link}
        className={classes}
        target={target}
      >
        {text}
        {icon}
      </Link>
    );
  }

  // Default button
  return (
    <button
      className={classes}
      onMouseDown={onMouseDown}
    >
      {text}
      {icon}
    </button>
  );
};