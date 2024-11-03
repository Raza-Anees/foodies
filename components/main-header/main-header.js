import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-links";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="logo" priority />
          Foodies
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink location="/meals" childern="Browse Meals" />
            </li>
            <li>
              <NavLink location="/community" childern="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
