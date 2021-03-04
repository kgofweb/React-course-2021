import PopTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button 
      style={{ backgroundColor: color }} 
      className='btn'
      onClick={onClick}
    >
      {text} 
    </button>
  )
}

Button.defaultProps = {
  color: 'skyblue',
}

Button.prototype = {
  color: PopTypes.string,
  text: PopTypes.string,
  onClick: PopTypes.func.isRequired
}

export default Button;