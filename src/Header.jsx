import logo from '/favicon.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  <>
  <header>
    <nav className="navbar navbar-expand-xl navbar-dark main-bg">
      <div className="container-fluid d-flex justify-content-center"> 
        <NavLink to="/" className='align-middle'>
          <img src={logo} className="logo-img" alt="Logo" title="Website_logo" />
          <div className='d-inline fs-4 ms-2 align-middle fw-bold f-graduate color-default'>Genzonix</div>
        </NavLink>
      </div >       
    </nav>
  </header>
  </>
)};

export default Header;
