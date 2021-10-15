import React, { useState } from "react";
import CategoryHeader from "components/User/Category/CategoryHeader";
import NewsCard from "components/User/News/NewsCard";

function CategoryCard(props) {
  const { category, listPost } = props;
  console.log(category.category_child.length);
  const initialState =
    category.category_child.length === Number(0)
      ? null
      : category.category_child[0].id;
  const [childId, setChildId] = useState(initialState);
  const onClickHandle = (data) => {
    setChildId(data);
  };

  return (
    <div className="container flexbox">
      <div
        className="col-left col-left-subfolder"
        id="automation_TV0"
        style={{ width: "100%" }}
      >
        <CategoryHeader category={category} onClick={onClickHandle} />
        <div
          className="width_common list-news-subfolder has-border-right"
          style={{
            marginTop: "15px",
            paddingTop: "15px",
            borderTop: "1px solid black",
          }}
        >
          {listPost
            .filter(
              (onePost) =>
                onePost.parent_id === Number(category.id) &&
                onePost.child_id === Number(childId)
            )
            .map((newsCard) => (
              <NewsCard newsCard={newsCard} key={newsCard.id} />
            ))}

          <article className="item-news item-news-common">
            <a href="/">Xem thêm ... </a>
          </article>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
