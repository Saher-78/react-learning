import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <>
      <nav>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/use-state-hook"> useState Hook</Link></li>
        <li><Link to="">Info</Link></li>
      </nav>
    </>
  )
}

export default Navbar;
