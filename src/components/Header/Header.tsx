"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon/Icon";
import { LOGO_URL, mainNav, trendingCities, type NavItem } from "@/data/site";
import styles from "./Header.module.scss";

function isActive(pathname: string, item: NavItem) {
  if ("children" in item) {
    return [...item.children, ...trendingCities].some((c) => c.href === pathname);
  }
  return pathname === item.href;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on navigation
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="L'amour Voyages home">
          <Image src={LOGO_URL} alt="" width={120} height={32} className={styles.logo} priority unoptimized />
          <span className={styles.brandName}>L&apos;amour Voyages</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {mainNav.map((item) =>
            "children" in item ? (
              <div key={item.label} className={styles.dropdown}>
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`${styles.navLink} ${isActive(pathname, item) ? styles.active : ""}`}
                >
                  {item.label}
                  <Icon name="expand_more" size={16} className={styles.chevron} />
                </button>
                <div className={styles.menuWrap}>
                  <div className={styles.menu}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${styles.menuItem} ${pathname === child.href ? styles.menuActive : ""}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                    <span className={styles.menuLabel}>Trending Cities</span>
                    {trendingCities.map((city) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        className={`${styles.menuItem} ${pathname === city.href ? styles.menuActive : ""}`}
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item) ? "page" : undefined}
                className={`${styles.navLink} ${isActive(pathname, item) ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact-us#planner" className={`btn btn--primary btn--sm ${styles.cta}`}>
            Plan My Trip
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <nav aria-label="Mobile">
          {mainNav.map((item) =>
            "children" in item ? (
              <div key={item.label} className={styles.drawerGroup}>
                <span className={styles.drawerLabel}>{item.label}</span>
                <div className={styles.drawerChips}>
                  {[...item.children, ...trendingCities].map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.drawerChip}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                {item.label}
                <Icon name="arrow_forward" size={18} />
              </Link>
            ),
          )}
          <Link
            href="/contact-us#planner"
            className={`btn btn--primary ${styles.drawerCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Plan My Trip
          </Link>
        </nav>
      </div>
    </header>
  );
}
