"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Spinner from "./spinner";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a short loading delay (e.g. for data or animation)
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Nhanh Kimson</span>
          </Link>
          <div className="grid gap-2 py-6">
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        {/* <MountainIcon  /> */}
        <img src="logo.ico" className="h-6" alt="" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <NavLinks />
      </nav>
      <Link href="/login">
        <Button className="ms-4">Login</Button>
      </Link>
    </header>
  );
}

function NavLinks() {
  const path = usePathname();
  const links = [
    { href: "/home", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/zone", label: "Zone Layout" },
    // { href: "/home", label: "Services" },
    // { href: "/home", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  return links.map(({ href, label }) => (
    <Link
          key={label}
          href={href}
          prefetch={false}
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors 
          ${
            path === href
              ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              : "bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          {label}
        </Link>
  ));
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}