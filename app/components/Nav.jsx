import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  onSearch = (e) => {
    e.preventDefault();
    
    const location = this.refs.location.value;
    if(location.length) {
      this.refs.location.value = '';
      const encodedLocation = encodeURIComponent(location);
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink
                to='/'
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >Get Weather</IndexLink>
            </li>
            <li>
              <Link
                to='/about'
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >About</Link>
            </li>
            <li>
              <Link
                to="/examples"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-rigth">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input 
                  type="search" 
                  ref="location" 
                  placeholder="Search weather by city"
                />
              </li>
              <li>
                <button className="button">Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
