import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <nav>

        <li><Link to="/home">home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/use-state-hook"> useState Hook</Link></li>
        <li><Link to="">Info</Link></li>
        <li><Link to="/condition">Conditions</Link></li>
        <li><Link to="/card-using-map">Card using Map Method</Link></li>
        <li><Link to="/cards-map">Card Map</Link></li>
        <li><Link to="/forms"> FormHandling</Link></li>
      </nav >
    </>
  )
}

export default Navbar;
