import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Admin/Navbar/Navbar";
import CustomContainer from "components/Admin/CustomContainer/CustomContainer";
import {
  Button,
  MenuItem,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  categoryState,
  detailState as detailSelector,
} from "app/selectors/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getPost } from "app/action";
import { requestUpdatePost } from "api/api";
import { useHistory } from "react-router";

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
  textField: {
    marginBottom: "15px",
    width: "100%",
  },
}));

export default function EditPost({ match }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail({ post_id: match.params.id }));
  }, [dispatch, match.params.id]);

  const detailState = useSelector(detailSelector);
  console.log(detailState);

  const category = useSelector(categoryState);
  const parentCategory = (id) =>
    category.isLoading
      ? { category_child: [] }
      : category.data.data.filter((element) => element.id === id)[0];

  const [postForm, setPostForm] = useState(
    detailState.data === undefined
      ? {}
      : { id: match.params.id.toString(), ...detailState.data.data }
  );
  useEffect(() => {
    setPostForm({ id: match.params.id.toString(), ...detailState.data.data });
  }, [detailState.data.data]);

  // console.log(postForm.data);
  const { title, detail, description, parent_id, child_id } =
    postForm === undefined
      ? { title: "", detail: "", description: "" }
      : { id: match.params.id.toString(), ...postForm };

  const handleChangePostForm = (e) => {
    setPostForm({
      id: match.params.id.toString(),
      ...postForm,
      [e.target.name]: e.target.value.toString(),
    });
  };

  const handleClickEditPost = async () => {
    try {
      console.log({
        title: title.toString(),
        description: description.toString(),
        detail: detail.toString(),
        id: match.params.id.toString(),
        update_child_id: child_id.toString(),
        update_parent_id: parent_id.toString(),
      });
      const res = await requestUpdatePost({
        title: title.toString(),
        description: description.toString(),
        detail: detail.toString(),
        post_id: match.params.id.toString(),
        update_child_id: child_id.toString(),
        update_parent_id: parent_id.toString(),
      });
      res.status === Number(1) ? alert(res.message) : alert("Lỗi");
      dispatch(getPost());
      history.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {detailState.isLoading ? null : (
        <div className={classes.root}>
          <Navbar />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <CustomContainer headerText="Edit Post">
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
                    <MenuItem key={0}>None </MenuItem>
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
                  data={detail}
                  value={detail}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // if (editor.state === "state") {
                    //   editor.setData(detail);
                    // }
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setPostForm({
                      id: match.params.id.toString(),
                      ...postForm,
                      detail: data,
                    });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                  name="detail"
                  className={classes.textField}
                />
              </div>
              <div>
                <Button
                  onClick={handleClickEditPost}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "15px" }}
                >
                  Done
                </Button>
              </div>
            </CustomContainer>
          </main>
        </div>
      )}
    </>
  );
}
