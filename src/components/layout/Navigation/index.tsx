"use client";

import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
	const pathname = usePathname();

	const navigationLinks = [
		{
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			name: "Transactions",
			path: "/transactions",
		},
		{
			name: "Cards",
			path: "/cards",
		},
		{
			name: "Invoices",
			path: "/invoices",
		},
		{
			name: "Insights",
			path: "/insights",
		},
	];

	return (
		<header className='px-16 bg-primary h-20 flex items-center'>
			<nav className='flex w-full items-center justify-between'>
				<div className='flex items-center space-x-6'>
					<Icons.LogoIcon />
					<span className='text-gray-700 text-xl pr-2.5'>◆</span>
					<div className='flex items-center space-x-6'>
						<Icons.FramerLogoIcon />
						<button>
							<Icons.DoubleCaretIcon />
						</button>
					</div>
				</div>
				<ul className='flex items-center space-x-4'>
					{navigationLinks.map((link, index) => (
						<li key={index}>
							<Link
								className={cn(
									"text-tc-light-gray transition-all px-2.5 py-3 text-sm hover:text-tc-light font-medium",
									{
										"text-tc-light bg-secondary": pathname === link.path,
									}
								)}
								href={link.path}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				<div className='flex items-center space-x-6'>
					<button>
						<Icons.SearchIcon />
					</button>
					<button>
						<Icons.NotificationsIcon />
					</button>
					<div className='h-8 w-[0.5px] bg-gray-700' />
					<button>
						<Icons.SettingsIcon />
					</button>
					<button>
						<Icons.AvatarIcon />
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
