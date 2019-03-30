import Link from "next/link";

import Button from "@material-ui/core/Button";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <Button variant="contained" style={linkStyle}>
        Home
      </Button>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
