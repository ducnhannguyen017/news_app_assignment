import React from "react";
import { Link } from "react-router-dom";

function NavbarLink(props) {
  const { categories } = props;
  const onClickHandle = () => {
    document.getElementById("all-category").classList.remove("hidden");
    document.getElementById("category-link").classList.add("hidden");
  };

  return (
    <>
      <nav className="main-nav">
        <ul className="parent">
          <li className="thoisu active" data-id="1001005">
            <Link to="/home" title="Thời sự" data-medium="Menu-ThoiSu">
              Mới Nhất
            </Link>
          </li>
          {categories.map((item) => (
            <li key={item.id} className="ykien" data-id="1001012">
              <Link
                to={`/home/${item.id}`}
                title="Ý kiến"
                data-medium="Menu-YKien"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="all-menu has_transition">
          <button
            onClick={onClickHandle}
            style={{ display: "flex", padding: "16.5px 15px" }}
          >
            Tất cả <span className="hamburger"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavbarLink;
