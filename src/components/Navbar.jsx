import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">Olx.com</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><a href="/">Home</a></li>
          <li><a href="/sell">Sell</a></li>
          <li><a href="/buy">Buy</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
