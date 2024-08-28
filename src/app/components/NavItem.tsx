import React from "react";
import Link from "next/link";
const NavItem = ({
  href,
  title,
  closeNavBar,
}: {
  href: any;
  title: String;
  closeNavBar?: () => void;
}) => {
  return (
    <Link
      onClick={closeNavBar}
      href={href}
      className="block py-2 pl-3 pr-4 text-textPrimary sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavItem;
