import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Deployable({
  text,
  rightIcon,
  subButtons = [],
  onClick = () => {},
}) {
  const [deploy, setDeploy] = useState(false);
  function handleClicik() {
    setDeploy((d) => !d);
  }
  return (
    <>
      <button className={`sidebar-button`} onClick={handleClicik}>
        <div>
          <span>{text}</span>
        </div>
        {rightIcon && <img src={rightIcon} alt="right icon button" />}
      </button>

      {subButtons.length !== 0 && (
        <div className={`deploy w-100 ${deploy ? "deployed" : "undeployed"}`}>
          {subButtons.map((btn,i) => (
            <SidebarButton key={i} {...btn} onClick={onClick} />
          ))}
        </div>
      )}
    </>
  );
}

export const SidebarButton = ({ text, leftIcon, rightIcon,onClick, route = "/" }) => {
  const router = useHistory();
  function handleClick() {
    onClick()
    router.push(route);
  }
  return (
    <button className={`sidebar-button deployable m-0`} onClick={handleClick}>
      <div>
        {leftIcon && <img src={leftIcon} alt="left icon button" width="18px" />}
        <span>{text}</span>
      </div>
      {rightIcon && <img src={rightIcon} alt="right icon button" />}
    </button>
  );
};
