import axios from "axios";

export const fetchCategories = async () => {
  try {
    const res = await axios.get(
      "https://tintucapi.phamtruong010.xyz/api/list-category"
    );
    console.log("cate");
    console.log(res.data);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};
export const fetchPosts = async () => {
  try {
    const res = await axios.get(
      `https://tintucapi.phamtruong010.xyz/api/list-post`
    );
    console.log("post");
    console.log(res.data);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};
export const fetchPostDetail = async (postId) => {
  try {
    const res = await axios.get(
      `https://tintucapi.phamtruong010.xyz/api/detail-post?post_id=${postId}`
    );
    console.log("post detail");
    console.log(res.data);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};

// export const fetchPosts = async () =>
//   await axios.get("https://tintucapi.phamtruong010.xyz/api/list-post").data;
