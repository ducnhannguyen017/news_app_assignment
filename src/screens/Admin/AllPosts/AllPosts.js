import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "components/Admin/Navbar/Navbar";
import PostsList from "components/Admin/PostsList/PostsList";
import CustomContainer from "components/Admin/CustomContainer/CustomContainer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Button,
  MenuItem,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { categoryState, postState } from "app/selectors/Selectors";
import { requestAddPost, requestRemovePost } from "api/api";
import { getPost } from "app/action";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  textField: {
    marginBottom: "15px",
    width: "100%",
  },
}));

export default function AllPosts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postForm, setPostForm] = useState({
    title: "",
    detail: "",
    sampleFile: "",
    description: "",
    parent_id: "",
    child_id: "",
  });
  const { title, detail, sampleFile, description, parent_id, child_id } =
    postForm;
  const handleChangePostForm = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value.toString() });
  };

  const columns = [
    { id: "id", label: "id", width: 170 },
    { id: "title", label: "Title", width: 100 },
    {
      id: "description",
      label: "Description",
      width: 170,
    },
    {
      id: "parent_id",
      label: "Parent",
      width: 170,
    },
    {
      id: "child_id",
      label: "Child",
      width: 170,
    },
  ];
  const post = useSelector(postState);
  const [postTable, setPostTable] = useState(post.isLoading ? {} : post.data);
  useEffect(() => {
    setPostTable(post.data);
  }, [post.data]);
  ///-----------
  const category = useSelector(categoryState);
  //------------
  console.log(category);
  console.log(postForm);

  const parentCategory = (id) =>
    category.isLoading
      ? { category_child: [] }
      : category.data.data.filter((element) => element.id === id)[0];

  const childCategory = (parentId, childId) =>
    parentCategory(parentId) === undefined
      ? { name: "" }
      : parentCategory(parentId).category_child.filter(
          (element) => element.id === childId
        )[0];

  function convert(id, title, description, parent, child) {
    const parentName =
      parentCategory(parent) === undefined ? {} : parentCategory(parent).name;
    const childName =
      childCategory(parent, child) === undefined
        ? ""
        : childCategory(parent, child).name;
    return { id, title, description, parentName, childName };
  }

  const rows =
    postTable.data === undefined
      ? {}
      : postTable.data.data.map((element) => {
          return convert(
            element.id,
            element.title,
            element.description,
            element.parent_id,
            element.child_id
          );
        });
  const handleClickSubmitForm = async () => {
    try {
      if (
        title === "" ||
        detail === "" ||
        // sampleFile === "" ||
        description === "" ||
        parent_id === "" ||
        child_id === ""
      ) {
        alert("Hãy điền đầy đủ thông tin");
        console.log(postForm);
      } else {
        const res = await requestAddPost(postForm);
        res.status === Number(1) ? alert(res.message) : alert("Lỗi");
        dispatch(getPost());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      // var choice = window.confirm("Do you want delete this category");
      // if (choice) {
      const res = await requestRemovePost({ post_id: String(id) });
      res.status === Number(1) ? alert(res.message) : alert("Lỗi");
      // }
      dispatch(getPost());
    } catch (error) {
      console.log("Lỗi");
    }
  };
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <CustomContainer headerText="All Posts">
          {postTable.data === undefined ? null : (
            <PostsList
              handleDeletePost={handleDeletePost}
              rows={rows}
              columns={columns}
            />
          )}
        </CustomContainer>
        <CustomContainer headerText="Add Post">
          <div>
            <h2>Title</h2>
            <TextField
              xs={10}
              id="filled-basic"
              variant="filled"
              style={{ marginBottom: "15px" }}
              className={classes.textField}
              name="title"
              value={title}
              onChange={handleChangePostForm}
            />
          </div>
          <div>
            <h2>Description</h2>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              className={classes.textField}
              name="description"
              value={description}
              onChange={handleChangePostForm}
            />
          </div>
          <div>
            <h2>Parent Category</h2>
            {category.isLoading ? null : (
              <TextField
                xs={2}
                id="filled-select-currency"
                select
                name="parent_id"
                value={parent_id}
                onChange={handleChangePostForm}
                variant="filled"
                className={classes.textField}
              >
                {category.data.data.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {String(option.name)}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </div>
          <div>
            <h2>Child Category</h2>
            <TextField
              xs={2}
              id="filled-select-currency"
              select
              name="child_id"
              value={child_id}
              onChange={handleChangePostForm}
              variant="filled"
              className={classes.textField}
            >
              {parentCategory(Number(parent_id)) === undefined ? (
                <MenuItem key={-1}>None </MenuItem>
              ) : (
                parentCategory(Number(parent_id)).category_child.map(
                  (option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {String(option.name)}
                    </MenuItem>
                  )
                )
              )}
            </TextField>
          </div>
          <div>
            <h2>Content</h2>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setPostForm({ ...postForm, detail: data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
              name="detail"
              value={detail}
              className={classes.textField}
              // onChange={handleChangePostForm}
            />
          </div>
          <div>
            <Button
              onClick={handleClickSubmitForm}
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
            >
              add
            </Button>
          </div>
        </CustomContainer>
      </main>
    </div>
  );
}
