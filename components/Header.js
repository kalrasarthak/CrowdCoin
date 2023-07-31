import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  const buttonStyles = {
    backgroundColor: "#3c339a",
    color: "white",
    borderRadius: "5px",
    marginRight: "1px",
  };

  return (
    <Menu style={{ marginTop: "10px", borderRadius: "5px" }}>
      <Link route="/">
        <a className="item" style={buttonStyles}>
          CrowdCoin
        </a>
      </Link>
      <Menu.Menu position="right" style={{ borderRadius: "5px" }}>
        <Link route="/">
          <a className="item" style={buttonStyles}>
            Campaigns
          </a>
        </Link>
        <Link route="campaigns/new">
          <a className="item" style={buttonStyles}>
            +
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
