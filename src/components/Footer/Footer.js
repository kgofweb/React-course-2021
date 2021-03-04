import { Link } from 'react-router-dom';

const Footer = () =>  {
  return (
    <footer>
      <p>React App &copy; 2021</p>
      <Link 
        to="/about"
        style={{ textDecoration: 'none', color: 'gray' }}
      >
        About
      </Link>
    </footer>
  )
}

export default Footer;