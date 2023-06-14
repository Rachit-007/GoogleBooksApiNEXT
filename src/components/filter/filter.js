import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useState } from "react";

export function Filter() {
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();
  const { query } = router;

  let filter = query.filter === "free-ebooks" ? "Not For Sale" : "For Sale";

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterValue = (filter) => {
    router.push({
      query: {
        search: query.search,
        index: query.index,
        filter,
      },
    });
    handleClose();
  };

  const clearFilter = () => {
    router.push({
      query: {
        search: query.search,
        index: query.index,
      },
    });
  };

  return (
    <div className="flex">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        className="text-black ml-5 bg-gray-200 hover:bg-gray-200"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="font-bold text-base capitalize tracking-wider font-sans">
          Filter
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="currentColor"
          className="font-extrabold ml-2 "
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => filterValue("free-ebooks")}
          value="free-ebooks"
        >
          Not For Sale
        </MenuItem>
        <MenuItem
          onClick={() => filterValue("paid-ebooks")}
          value="paid-ebooks"
        >
          For Sale
        </MenuItem>
      </Menu>
      {query.filter ? (
        <div className="flex bg-gray-200 rounded-md ml-3 justify-between items-center px-3">
          <span>{filter}</span>
          <button onClick={() => clearFilter()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="15px"
              height="15px"
              className=" ml-5 text-gray-500 cursor-pointer"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
