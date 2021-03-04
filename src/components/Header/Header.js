import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>

      {
        location.pathname === '/' && (
          <Button 
            color={showAdd ? '#df4759' : 'green'}
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd}
          />
        )
      }
    </header>
  )
}

// Default propTypes
Header.defaultProps = {
  title: 'Task Tracker',
}

// PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;