import React, { useState } from "react";
import { SideDataNormal } from "../../../asssets/SideData/sideDataNormal";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { NavLink } from "react-router-dom";
import styles from "../SuperAdmin/superadminnav.module.css";

export default function SuperAdminNav() {
  const [open, setopen] = useState(false);

  const toggleOpen = () => {
    setopen(!open);
  };

  return (
    <div data-testid = "admin_sidebar" className={open ? styles.sidenav : styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>
      {SideDataNormal.map((item) => {
        return (
          <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={open ? styles.linkText : styles.linkTextClosed}>
              {item.text}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
}
