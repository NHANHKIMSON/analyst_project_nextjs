import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Notification } from "iconsax-reactjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = ({
  logo = {
    url: "#",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Kork Lern",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "register" },
  },
}) => {
  return (
    // <section className="py-4 w-full">
    //   <div className="container">
    //     {/* Desktop Menu */}
    //     <nav className="hidden justify-between lg:flex">
    //       <div className="flex items-center gap-6">
    //         {/* Logo */}
    //         <a href={logo.url} className="flex items-center gap-2">
    //           <img src={logo.src} className="max-h-8" alt={logo.alt} />
    //           <span className="text-lg font-semibold tracking-tighter">
    //             {logo.title}
    //           </span>
    //         </a>
    //         <div className="flex items-center">
    //           <NavigationMenu>
    //             <NavigationMenuList>
    //               {menu.map((item) => renderMenuItem(item))}
    //             </NavigationMenuList>
    //           </NavigationMenu>
    //         </div>
    //       </div>
    //       <div className="flex gap-2">
    //         <Button asChild variant="outline" size="sm">
    //           <a href={auth.login.url}>{auth.login.title}</a>
    //         </Button>
    //         <Button asChild size="sm">
    //           <a href={auth.signup.url}>{auth.signup.title}</a>
    //         </Button>
    //       </div>
    //     </nav>

    //     {/* Mobile Menu */}
    //     <div className="block lg:hidden">
    //       <div className="flex items-center justify-between">
    //         {/* Logo */}
    //         <a href={logo.url} className="flex items-center gap-2">
    //           <img src={logo.src} className="max-h-8" alt={logo.alt} />
    //         </a>
    //         <Sheet>
    //           <SheetTrigger asChild>
    //             <Button variant="outline" size="icon">
    //               <Menu className="size-4" />
    //             </Button>
    //           </SheetTrigger>
    //           <SheetContent className="overflow-y-auto">
    //             <SheetHeader>
    //               <SheetTitle>
    //                 <a href={logo.url} className="flex items-center gap-2">
    //                   <img src={logo.src} className="max-h-8" alt={logo.alt} />
    //                 </a>
    //               </SheetTitle>
    //             </SheetHeader>
    //             <div className="flex flex-col gap-6 p-4">
    //               <Accordion
    //                 type="single"
    //                 collapsible
    //                 className="flex w-full flex-col gap-4"
    //               >
    //                 {menu.map((item) => renderMobileMenuItem(item))}
    //               </Accordion>

    //               <div className="flex flex-col gap-3">
    //                 <Button asChild variant="outline">
    //                   <a href={auth.login.url}>{auth.login.title}</a>
    //                 </Button>
    //                 <Button asChild>
    //                   <a href={auth.signup.url}>{auth.signup.title}</a>
    //                 </Button>
    //               </div>
    //             </div>
    //           </SheetContent>
    //         </Sheet>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <header className="border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <nav className="relative">
          {/* Left - Logo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Link href="/">
              <Image src="/logo.ico" alt="Korklern Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Center - Nav Links */}
          <ul className="text-center space-x-6">
            <Link href="/" className="text-purple-600 font-semibold">
              Home
            </Link>
            <Link href="/events" className="hover:text-purple-600">
              Event Management
            </Link>
            <Link href="/dashboard" className="hover:text-purple-600">
              Dashboard
            </Link>
            <Link href="/about" className="hover:text-purple-600">
              About
            </Link>
          </ul>

          {/* Right - Icons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-4">
            <Notification className="w-5 h-5" />
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </div>
    </header>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };