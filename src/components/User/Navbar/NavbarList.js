import React from "react";
import { Link } from "react-router-dom";

function NavbarList(props) {
  const { categories } = props;
  const handleClickCloseNavbarList = () => {
    document.getElementById("all-category").classList.add("hidden");
    document.getElementById("category-link").classList.remove("hidden");
  };
  return (
    <>
      <section className="wrap-all-menu">
        <div className="container">
          <div className="header-menu">
            <span className="name-header">Tất cả chuyên mục</span>
            <button
              onClick={handleClickCloseNavbarList}
              className="close-menu"
              title="Đóng"
            >
              Đóng <span className="icon-close"></span>
            </button>
          </div>
          <div className="content-left">
            <div className="width_common scroll-menu-expand scrollbar-inner ss-container">
              <div className="ss-wrapper">
                <div className="ss-content">
                  <div className="row-menu">
                    {categories.map((categoryParent) => (
                      <ul
                        key={categoryParent.id}
                        className="cat-menu fix-view-cate-0"
                        data-cate="0"
                      >
                        <li className="thoisu">
                          <Link
                            to={`/home/${categoryParent.id}`}
                            title="Thời sự"
                            data-medium="Menu-ThoiSu"
                            data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Menu-ThoiSu&amp;vn_term=Desktop"
                            data-itm-added="1"
                            onClick={handleClickCloseNavbarList}
                          >
                            {categoryParent.name}
                          </Link>
                        </li>

                        {categoryParent.category_child.map((categoryChild) => (
                          <li key={categoryChild.id} null="">
                            <Link
                              to={`/home/${categoryParent.id}`}
                              title="Chính trị"
                              href="https://vnexpress.net/thoi-su/chinh-tri"
                              data-medium="Menu-ChinhTri"
                              data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Menu-ChinhTri&amp;vn_term=Desktop"
                              data-itm-added="1"
                              onClick={handleClickCloseNavbarList}
                            >
                              {categoryChild.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="ss-scroll"
                style={{
                  height: "35.4788%",
                  top: "15.6986%",
                  right: "-935px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="wrap-all-menu"></section> */}
    </>
  );
}

export default NavbarList;
