import React from "react";
import NavbarLink from "components/User/Navbar/NavbarLink";
import NavbarList from "components/User/Navbar/NavbarList";

function Navbar(props) {
  const { categories } = props;
  return (
    <section
      className="section wrap-main-nav show-all-menu"
      id="wrap-main-nav"
      data-campaign="Header"
    >
      <div id="category-link">
        <NavbarLink categories={categories} />
      </div>
      <div id="all-category" className="hidden">
        <NavbarList categories={categories} />
      </div>
    </section>
  );
}

export default Navbar;
