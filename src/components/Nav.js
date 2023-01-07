import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (  
    <header>
      <div className="container">
        <NavLink to='/'>
          <h1>Workout Buddy</h1>
        </NavLink>
      </div>
    </header>
  );
}
 
export default Nav;