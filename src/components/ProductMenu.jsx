import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function ProductMenu({ menuList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Products
      </a>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={'product/seo3_lite'}>SE03 Lite</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={'product/seo3'}>SE03</Link>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={'product/seo3_max'}>SE03 Max</Link>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={'product/all'}> Compare all</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
