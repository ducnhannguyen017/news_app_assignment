import React, { useRef } from "react";

function CategoryHeader(props) {
  const { category, onClick } = props;
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e.target.getAttribute("value"));
  };

  const cate = useRef(null);
  const handleActiveCategory = (e) => {
    cate.current.childNodes.forEach((element) => {
      element.classList.remove("active");
    });
    console.log(cate);
    e.currentTarget.classList.add("active");
  };
  return (
    <section className="section top-header top-header-folder">
      <div className="container" data-campaign="Header">
        <div className="width_common top-folder flexbox">
          <div className="title-folder">
            <a title="Thời sự" data-medium="Menu-ThoiSu" href="/thoi-su">
              {category.name}
            </a>
          </div>
        </div>
        <nav className="width_common nav-folder">
          <ul className="ul-nav-folder" id={`list${category.id}`} ref={cate}>
            {category.category_child.map((categoryChild, index) => (
              <li
                key={categoryChild.id}
                className=""
                onClick={handleActiveCategory}
              >
                <a
                  title="Đại hội XIII"
                  data-medium="Menu-DaiHoiXiii"
                  href="/"
                  value={categoryChild.id}
                  onClick={handleClick}
                >
                  {categoryChild.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default CategoryHeader;
