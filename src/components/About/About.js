import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const About = () => {
  return (
    <div>
      <h4>Version 2.0.1</h4>
      <Link 
        to="/"
        style={{
          color: 'gray', 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Go back
        <IoIosArrowBack 
          style={{ marginLeft: '.3rem' }}
        />
      </Link>
    </div>
  )
}

export default About;