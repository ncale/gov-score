"use client";

import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePathname } from "next/navigation";
import HamburgerIcon from "./icons/hamburger-icon";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export function NavLinks() {
	const isDesktop = useMediaQuery("(min-width: 768px)")
	const currentPath = usePathname();
	return (
		<>
			{isDesktop ? (
				<NavbarContent className="flex gap-4 tracking-wide" justify="center">
					<NavbarItem className="text-xl">
						<Link href="/faq" color="foreground" className={currentPath === "/faq" ? "font-bold" : ""}>
							FAQ
						</Link>
					</NavbarItem>
					<NavbarItem className="text-xl">|</NavbarItem>
					<NavbarItem className="text-xl">
						<Link href="/delegates" color="foreground" className={currentPath === "/delegates" ? "font-bold" : ""}>
							Delegates
						</Link>
					</NavbarItem>
				</NavbarContent>
			) : null}
		</>
	)
}

export function NavConnectButton() {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const currentPath = usePathname();
	return (
		<NavbarContent justify="end">
			<NavbarItem>
				<ConnectButton chainStatus="none" showBalance={false} accountStatus={{ smallScreen: "avatar", largeScreen: "address" }}/>
			</NavbarItem>
			{isDesktop ? null : (
				<NavbarItem>
					<Drawer direction="top">
						<DrawerTrigger><HamburgerIcon /></DrawerTrigger>
						<DrawerContent>
							<ul className="flex flex-col mt-6">
								<li className="text-3xl ml-2">
									<Link href="/faq" color="foreground" className={`${currentPath === "/faq" ? "font-bold" : ""} text-3xl p-1`}>FAQ</Link>
								</li>
								<li className="text-3xl ml-2">
									<Link href="/delegates" color="foreground" className={`${currentPath === "/delegates" ? "font-bold" : ""} text-3xl p-1`}>Delegates</Link>
								</li>
							</ul>
						</DrawerContent>
					</Drawer>
				</NavbarItem>
			)}
		</NavbarContent>
	)
}