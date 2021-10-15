import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "screens/User/Detail/detail.css";
import { requestPost } from "api/api";
import { Link } from "react-router-dom";

function NewsDetail(props) {
  const { post, parentId, childId, setUrlParam } = props;
  const [readNext, setReadNext] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const params = {
      parent_id: parentId,
      child_id: childId,
    };
    const res = await requestPost(params);
    setReadNext(res);
  };
  console.log(post);
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
                  {/* <Link
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
                  </Link> */}
                </li>
                <span id="parentCateDetail" data-cate="1001005"></span>
                <span id="site-sub-id" data-cate="1001005"></span>
              </ul>
              <span className="date">{post.updatedAt}</span>
            </div>
            <h1 className="title-detail">{post.title}</h1>
            {/* /// */}
            <div style={{ marginBottom: "20px" }}>
              <img alt="" src={post.image} style={{ width: "100%" }}></img>
              <figcaption itemprop="description">
                <p class="Image">{post.title}</p>
              </figcaption>
            </div>
            {/* ///// */}
            {parse(post.detail)}
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
                {readNext.data === undefined
                  ? null
                  : readNext.data.data.map((item) => (
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
                          <Link
                            to={`/detail/${item.id}`}
                            data-event-category="Article Link Click"
                            data-event-action="Box-InCategory"
                            data-event-label="Item-1"
                            data-segment="default"
                            data-topic="default"
                            data-itm-source="#vn_source=Detail&amp;vn_campaign=Box-InCategory&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_segment=default&amp;vn_topic=default"
                            className="thumb thumb-5x3"
                            title="Covid 24h: Hà Nội dỡ chốt kiểm soát, TP HCM giảm ca tử vong"
                            data-itm-added="1"
                            onClick={() => setUrlParam(item.id)}
                          >
                            <picture>
                              {/* <video style={{ display: "none" }}>
                                <source
                                  data-srcSet="https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dTWglpTXTkRpPBzPOlCu5g 1x, https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=PNtLFKKkF52gbW5aP6Usjg 2x"
                                  srcSet="
                            https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dTWglpTXTkRpPBzPOlCu5g 1x,
                            https://i1-vnexpress.vnecdn.net/2021/09/16/img4570jpg-1631806661-16318070-5658-4643-1631807520.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=PNtLFKKkF52gbW5aP6Usjg 2x
                          "
                                />
                              </video> */}
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
                          </Link>
                        </div>
                        <h4 className="title-news">
                          <Link
                            to={`/detail/${item.id}`}
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
                          </Link>
                        </h4>
                        <p className="description">
                          <Link
                            to={`/detail/${item.id}`}
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
                          </Link>
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
