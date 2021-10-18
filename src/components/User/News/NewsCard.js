import React from "react";
import { Link } from "react-router-dom";

function NewsCard(props) {
  const { newsCard } = props;
  return (
    <>
      <article className="item-news item-news-common">
        <div className="thumb-art">
          <Link
            to={`/detail/${newsCard.id}`}
            data-medium="Item-2"
            data-thumb="1"
            href="https://vnexpress.net/viet-nam-han-quoc-tang-cuong-hop-tac-cong-nghiep-quoc-phong-4357501.html"
            className="thumb thumb-5x3"
            title="Việt Nam - Hàn Quốc tăng cường hợp tác công nghiệp Quốc phòng"
          >
            <picture>
              <img
                itemProp="contentUrl"
                style={{ transform: "translateX(-50%)", left: "50%" }}
                loading="lazy"
                intrinsicsize="300x180"
                alt="Việt Nam - Hàn Quốc tăng cường hợp tác công nghiệp Quốc phòng"
                className="lazy"
                src={newsCard.image}
              />
            </picture>
          </Link>
        </div>
        <h2 className="title-news">
          <Link
            to={`/detail/${newsCard.id}`}
            data-medium="Item-2"
            data-thumb="1"
            href="https://vnexpress.net/viet-nam-han-quoc-tang-cuong-hop-tac-cong-nghiep-quoc-phong-4357501.html"
            title="Việt Nam - Hàn Quốc tăng cường hợp tác công nghiệp Quốc phòng"
          >
            {newsCard.title}
          </Link>
        </h2>
        <p className="description">
          <Link
            to={`/detail/${newsCard.id}`}
            data-medium="Item-2"
            data-thumb="1"
            href="https://vnexpress.net/viet-nam-han-quoc-tang-cuong-hop-tac-cong-nghiep-quoc-phong-4357501.html"
            title="Việt Nam - Hàn Quốc tăng cường hợp tác công nghiệp Quốc phòng"
          >
            {newsCard.description}
          </Link>
          <span className="meta-news">
            <Link
              to={`/detail/${newsCard.id}`}
              className="count_cmt"
              href="https://vnexpress.net/viet-nam-han-quoc-tang-cuong-hop-tac-cong-nghiep-quoc-phong-4357501.html#box_comment_vne"
              style={{ whiteSpace: "nowrap", display: "none" }}
            >
              <svg className="ic ic-comment"></svg>
              <span
                className="txt_num_comment font_icon"
                data-type="comment"
                data-objecttype="1"
                data-objectid="4357501"
              ></span>
            </Link>
          </span>
        </p>
      </article>
    </>
  );
}

export default NewsCard;
