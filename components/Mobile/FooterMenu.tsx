"use client";

import React from "react";
import { HiShoppingBag, HiShoppingCart, HiHeart, HiUser } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useViewpoint } from "@/hooks";
import Link from "next/link";
import useLangStore from "@/store/LangStore";

interface FooterMenuProps {}

const iconSize = 22;

const FooterMenu: React.FC<FooterMenuProps> = () => {
  const lang = useLangStore((state) => state.lang);

  const { isPhone, isTablet } = useViewpoint();

  const pathname = usePathname();

  const items = React.useMemo(
    () => [
      { id: "1", label: lang.common.menu.mart, icon: <HiShoppingBag size={iconSize} />, path: "/" },
      { id: "2", label: lang.common.menu.cart, icon: <HiShoppingCart size={iconSize} />, path: "/cart" },
      { id: "3", label: lang.common.menu.favorite, icon: <HiHeart size={iconSize} />, path: "/favorite" },
      { id: "4", label: lang.common.menu.account, icon: <HiUser size={iconSize} />, path: "/auth" },
    ],
    [lang]
  );

  const renderItems = () => {
    const itemWidth = `calc(100% / ${items.length})`;
    return items.map((item) => {
      const activeClassName = item.path === pathname ? "menu-item-active" : "";
      return (
        <Link
          href={item.path}
          key={item.id}
          style={{ width: itemWidth }}
          className={`menu-item ${activeClassName}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      );
    });
  };

  return <div className="footer-menu">{renderItems()}</div>;
};

export default FooterMenu;
