import React from "react";
import {
  SidebarContanier,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContanier isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="experience" onClick={toggle}>
              Experience
            </SidebarLink>
            <SidebarLink to="education" onClick={toggle}>
              Education
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact me
            </SidebarLink>
          </SidebarMenu>
          {/* <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap> */}
        </SidebarWrapper>
      </SidebarContanier>
    </>
  );
};

export default Sidebar;
