import { requestDetailPost } from "api/api";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import NewsDetail from "components/User/News/NewDetail";
import { categories, listPost } from "data";
import React, { useEffect } from "react";

function Detail({ match }) {
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const params = {
      post_id: match.params.id
    }
    try {
      let res = await requestDetailPost(params)
      console.log(res);
    } catch (error) {
      console.log("error");
    } finally {

    }
  }
  const post = listPost.data.find(
    (element) => element.id === Number(match.params.id)
  );

  ///get name category for NewsDetail
  const parent = categories.find(
    (element) => element.id === Number(post.parent_id)
  );
  const child = parent.category_child.find(
    (element) => element.id === Number(post.child_id)
  );

  ///get data for read next
  const readNext = listPost.data.filter(
    (element) =>
      element.parent_id ===
      Number(post.parent_id && element.child_id === Number(post.child_id))
  );
  console.log(readNext);
  return (
    <>
      <Header />
      <Navbar categories={categories} />
      <NewsDetail
        post={post}
        parentName={parent.name}
        childName={child.name}
        readNext={readNext}
      />
    </>
  );
}

export default Detail;
