import React from "react";
import { Link } from "react-router-dom";
import { today } from "utils/userUtils";

function Header() {
  return (
    <header className="section top-header" data-campaign="Header">
      <div className="container">
        <Link
          to="/home"
          data-medium="Logo"
          className="logo"
          title="VnExpress - Báo tiếng Việt nhiều người xem nhất"
        >
          <img
            src="https://s1.vnecdn.net/vnexpress/restruct/i/v431/v2_2019/pc/graphics/logo.svg"
            alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
          />
        </Link>
        <span className="time-now">{today}</span>
        <div className="right">
          <h2>
            <Link to="/auth" className="btn24hqua " title="Mới nhất">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
