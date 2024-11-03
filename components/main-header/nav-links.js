"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-links.module.css";

export default function NavLink({ location, childern }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.startsWith(location)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
      href={location}
    >
      {childern}
    </Link>
  );
}
