import { getDetail } from "app/action";
import { categoryState, detailState } from "app/selectors/Selectors";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import NewsDetail from "components/User/News/NewDetail";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Detail({ match }) {
  const category = useSelector(categoryState);
  const detail = useSelector(detailState);
  const dispatch = useDispatch();
  const [urlParam, setUrlParam] = useState(match.params.id);
  console.log(urlParam);
  useEffect(() => {
    dispatch(getDetail({ post_id: urlParam }));
  }, [dispatch, urlParam]);

  return (
    <>
      <Header />
      {category.isLoading ? null : <Navbar categories={category.data.data} />}
      {detail.isLoading ? null : (
        <NewsDetail
          post={detail.data.data}
          parentId={detail.data.data.parent_id}
          childId={detail.data.data.child_id}
          setUrlParam={setUrlParam}
        />
      )}
    </>
  );
}

export default Detail;
