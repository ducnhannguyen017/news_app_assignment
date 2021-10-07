import { Axios } from "axios";

export const fetchParentCategory = async (token) => {
  try {
    const res = await Axios.get(
      `https://tintucapi.phamtruong010.xyz/api/list-category-child`,
      {
        header: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwaGFtdHJ1b25nMDEwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJG9jamFiRlFsZjZ4SzFSVXdzNXhsa09iTU1jSm9OaFRLVzhiWElQT2FkTzZ6R0NUYmE5TzNpIiwibmFtZSI6InRydW9uZyIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMDY6MzA6NTIuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMTNUMDY6MzA6NTIuMDAwWiIsImlhdCI6MTYzMzU3OTUwNywiZXhwIjoxNjM0MTg0MzA3fQ.F3wPJwd9X6AydYDfpEmnVOA9hCiKM8B7w9nMPScLFEE",
        },
      }
    );
    console.log("fetchParentCategory");
    console.log(res.data);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};
