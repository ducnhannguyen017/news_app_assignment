import React from "react";
import parse from "html-react-parser";
import "screens/User/Detail/detail.css";
import { Link } from "react-router-dom";

function NewsDetail(props) {
  const { post, parentName, childName, readNext } = props;
  return (
    <>
      <section
        className="section page-detail top-detail"
        data-component-config='{"type":"text","article_id":"4357781"}'
      >
        <div className="container">
          <div className="sidebar-1">
            <div className="header-content width_common">
              <ul className="breadcrumb" data-campaign="Header">
                <li style={{ display: "flex" }}>
                  <Link
                    to={`/home/${post.parent_id}`}
                    data-medium="Menu-ThoiSu"
                    title="Thời sự"
                  >
                    {parentName}
                  </Link>
                  <div>\</div>
                  <Link
                    to={`/home/${post.parent_id}`}
                    data-medium="Menu-ThoiSu"
                    href="/thoi-su"
                    title="Thời sự"
                  >
                    {childName}
                  </Link>
                </li>
                <span id="parentCateDetail" data-cate="1001005"></span>
                <span id="site-sub-id" data-cate="1001005"></span>
              </ul>
              {/* <span className="date">Thứ sáu, 17/9/2021, 08:56 (GMT+7)</span> */}
              <span className="date">{post.updatedAt}</span>
            </div>
            <h1 className="title-detail">{post.title}</h1>
            {parse(post.detail)}
            <div id="_detail_topic" className="lazier"></div>
          </div>
        </div>
      </section>
      <section className="section page-detail bottom-detail">
        <div className="container">
          <div className="box-category__list-news">
            <div className="sidebar-1">
              <div
                className="width_common list-news-subfolder"
                id="detail_topnew"
              >
                {readNext.map((item) => (
                  <article
                    data-event-category="Article Link Display"
                    data-event-action="Box-InCategory"
                    data-event-label="Item-1"
                    data-segment="default"
                    data-topic="default"
                    data-gtm-vis-first-on-screen-2359946_230="432846"
                    data-gtm-vis-total-visible-time-2359946_230="100"
                    data-gtm-vis-has-fired-2359946_230="1"
                  >
                    <div className="thumb-art">
                      <a
                        href="https://vnexpress.net/covid-24h-ha-noi-do-chot-kiem-soat-tp-hcm-giam-ca-tu-vong-4357694.html"
                        data-event-category="Article Link Click"
                        data-event-action="Box-InCategory"
                        data-event-label="Item-1"
                        data-segment="default"
                        data-topic="default"
                        data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-InCategory&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_segment=default&amp;vn_topic=default"
                        className="thumb thumb-5x3"
                        title="Covid 24h: Hà Nội dỡ chốt kiểm soát, TP HCM giảm ca tử vong"
                        data-itm-added="1"
                      >
                        <picture>
                          <video style={{ display: "none" }}>
                            <source
                              data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dTWglpTXTkRpPBzPOlCu5g 1x, https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=PNtLFKKkF52gbW5aP6Usjg 2x"
                              srcset="
                            https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dTWglpTXTkRpPBzPOlCu5g 1x,
                            https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=PNtLFKKkF52gbW5aP6Usjg 2x
                          "
                            />
                          </video>
                          <img
                            loading="lazy"
                            intrinsicsize="300x180"
                            alt="Covid 24h\: Hà Nội dỡ chốt kiểm soát, TP HCM giảm ca tử vong"
                            className="lazy lazied"
                            src={item.image}
                            data-src="https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dTWglpTXTkRpPBzPOlCu5g"
                            data-ll-status="loaded"
                          />
                        </picture>
                      </a>
                    </div>
                    <h4 className="title-news">
                      <a
                        href="https://vnexpress.net/covid-24h-ha-noi-do-chot-kiem-soat-tp-hcm-giam-ca-tu-vong-4357694.html"
                        data-event-category="Article Link Click"
                        data-event-action="Box-InCategory"
                        data-event-label="Item-1"
                        data-segment="default"
                        data-topic="default"
                        data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-InCategory&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_segment=default&amp;vn_topic=default"
                        title="Covid 24h: Hà Nội dỡ chốt kiểm soát, TP HCM giảm ca tử vong"
                        data-itm-added="1"
                      >
                        {item.title}
                      </a>
                    </h4>
                    <p className="description">
                      <a
                        href="https://vnexpress.net/covid-24h-ha-noi-do-chot-kiem-soat-tp-hcm-giam-ca-tu-vong-4357694.html"
                        data-event-category="Article Link Click"
                        data-event-action="Box-InCategory"
                        data-event-label="Item-1"
                        data-segment="default"
                        data-topic="default"
                        data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-InCategory&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_segment=default&amp;vn_topic=default"
                        title="Covid 24h: Hà Nội dỡ chốt kiểm soát, TP HCM giảm ca tử vong"
                        data-itm-added="1"
                      >
                        {item.description}
                      </a>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsDetail;
