"use client";

import Button from "@/components/global/Button";
import Icons from "@/components/icons";
import StatsCard from "../StatsCard";
import RecentTransactions from "../RecentTransactions";
import CashFlow from "../CashFlow";
import { useState } from "react";

const Dashboard = () => {
	const [statsClicked, setStatsClicked] = useState("");

	const data = [
		{
			name: "business account",
			amount: 3384200,
			trendValue: 12.1,
			icon: <Icons.BusinessAccountIcon />,
			iconHover: <Icons.BusinessAccount2Icon />,
			actionText: "view account details",
		},
		{
			name: "tax reserve",
			amount: 70000,
			trendValue: -2.1,
			icon: <Icons.TaxReserveIcon />,
			iconHover: <Icons.TaxReserve2Icon />,
			actionText: "edit tax automation",
		},
		{
			name: "business savings",
			amount: 162300,
			trendValue: 12.1,
			icon: <Icons.BusinessSavingsIcon />,
			iconHover: <Icons.BusinessSavings2Icon />,
			actionText: "view account details",
			style: "-left-1 top-0.5",
		},
	];
	return (
		<>
			<section className='bg-primary pt-20 pb-32'>
				<div className='container text-tc-light flex space-x-10 justify-between'>
					<div className='flex items-end space-x-4'>
						<div className='space-y-3 mb-2'>
							<div className='text-sm'>Total Balance</div>
							<div className='text-[40px] leading-6'>$36,254</div>
						</div>
						<div className='flex items-end space-x-2.5'>
							<Icons.TrendUpIcon />
							<div className='h-[18px]'>$328.32 Today, Feb 15</div>
						</div>
					</div>
					<div className='flex items-center space-x-6'>
						<Button theme='plain' className='px-0'>
							<div className='flex items-center space-x-2'>
								<Icons.SeeIcon />
								<div className='text-tc-light-gray'>View Analytics</div>
							</div>
						</Button>
						<div className='h-8 w-[0.5px] bg-gray-700' />
						<Button theme='plain' className='bg-secondary'>
							<div className='flex items-center space-x-2'>
								<Icons.TrendUpOutlineIcon />
								<div>Send Money</div>
							</div>
						</Button>
						<Button theme='plain' className='bg-[#171E39]'>
							<div className='flex items-center space-x-2'>
								<Icons.PlusIcon />
								<div>Add Money</div>
							</div>
						</Button>
						<Button theme='plain' className='px-0'>
							<Icons.MoreIcon />
						</Button>
					</div>
				</div>
				<div className='container mt-12 flex items-end space-x-2'>
					<Icons.StarIcon />
					<div className='flex items-center space-x-5'>
						<div className='text-tc-light'>Overview</div>
						<div className='text-tc-light-gray text-xs'>Last 30 days</div>
					</div>
				</div>
			</section>
			<section className='bg-white relative'>
				<div
					dir={statsClicked === "business savings" ? "rtl" : "ltr"}
					className='container flex items-center gap-x-14 absolute -top-24 left-1/2 -translate-x-1/2 transform'>
					{}
					{(statsClicked === "business savings" ? data.reverse() : data)?.map(
						(item, index) => {
							return (
								<StatsCard
									setStatsClicked={setStatsClicked}
									key={item.name}
									item={item}
									index={index}
									statsClicked={statsClicked}
								/>
							);
						}
					)}
				</div>
			</section>
			<section className='pt-32'>
				<div className='container grid grid-cols-2 mt-10 mb-20 gap-12'>
					<RecentTransactions />
					<CashFlow />
				</div>
			</section>
		</>
	);
};

export default Dashboard;
