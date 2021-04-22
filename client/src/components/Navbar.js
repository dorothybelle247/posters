import React from "react";
import "./styles.css"


const Navbar = () => {
  return (
    <div>
    {/* https://codepen.io/wouterXD/pen/PowjvBb */}
      <ul className="nav">
        <li className="logo">Parotier</li>
        <li tabindex="0">
          <i>home</i>
        </li>
        <li tabindex="0">
        <i class="fas fa-home"></i>
        </li>
        <li tabindex="0">
          <i data-feather="list">
          login
</i>          
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
