import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "react-router-dom";
import { requestRemoveParentCategory } from "api/api";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  button: {
    padding: "0px",
    maxWidth: "80px",
    marginRight: "5px",
  },
});

function Row(props) {
  const { row } = props;
  const { handleClickDelete } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.createdAt}</TableCell>
        <TableCell>{row.updatedAt}</TableCell>
        <TableCell style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <Link to={`/admin/edit-parent/${row.id}`}>View</Link>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleClickDelete(row, "parent")}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Child Category
              </Typography>
              <Table size="small" aria-label="purchases">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "30%" }} />
                  <col style={{ width: "24%" }} />
                  <col style={{ width: "1%" }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Updated At</TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.category_child.map((childRow) => (
                    <TableRow key={childRow.id}>
                      <TableCell component="th" scope="row">
                        {childRow.id}
                      </TableCell>
                      <TableCell>{childRow.name}</TableCell>
                      <TableCell>{childRow.createdAt}</TableCell>
                      <TableCell>{childRow.updatedAt}</TableCell>
                      <TableCell style={{ display: "flex" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          <Link to={`/admin/edit-child/${childRow.id}`}>
                            View
                          </Link>
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          onClick={() => handleClickDelete(childRow, "child")}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function Category(props) {
  const { categories, handleClickDelete } = props;
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <colgroup>
            <col style={{ width: "5%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <Row
                handleClickDelete={handleClickDelete}
                key={row.id}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
