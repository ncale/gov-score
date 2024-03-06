"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Header() {
	
	const currentPath = usePathname();
	
	return (
		<Navbar isBordered height="6rem">
			<NavbarBrand className="flex flex-col items-start">
        <Image 
					src={"/optimism-logo.png"} 
					alt="optimism logo"
					width={225}
					height={31}
					className="h-6 w-auto"
					radius="none" />
				<h1 className="text-2xl text-inherit">GovScore</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 tracking-wide" justify="center">
        <NavbarItem className="text-xl">
          <Link href="/" color="foreground" className={currentPath === "/" ? "font-bold" : ""}>
            Thesis
          </Link>
        </NavbarItem>
				<NavbarItem className="text-xl">|</NavbarItem>
        <NavbarItem className="text-xl">
          <Link href="/delegates" color="foreground" className={currentPath === "/delegates" ? "font-bold" : ""}>
            Delegates
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Connect Wallet
          </Button>
        </NavbarItem>
      </NavbarContent>
		</Navbar>
	)
}