"use client";

import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const CashFlow = () => {
	const [activeTab, setActiveTab] = useState("moneyIn");

	const data = [
		{
			name: "Stripe",
			amount: 351472,
			percentage: 70,
			color: "#C1B4F8",
		},
		{
			name: "Crypto Academy",
			amount: 351472,
			percentage: 20,
			color: "#99E5F9",
		},
		{
			name: "Wire Return",
			amount: 351472,
			percentage: 6,
			color: "#EEB2CC",
		},
	];

	const tabs = [
		{
			name: "moneyIn",
			label: "Money In",
			amount: 508300,
		},
		{
			name: "moneyOut",
			label: "Money Out",
			amount: 48564,
		},
	];

	return (
		<section className=''>
			<div className='flex items-end justify-between pb-6 border-b'>
				<div className='flex items-end space-x-3'>
					<div className='flex items-center space-x-2'>
						<Icons.CashFlowIcon />
						<h3 className='text-xl font-semibold'>Cash Flow</h3>
					</div>
					<div className='text-sm text-tc-light-gray mb-0.5'>Last 30 days</div>
				</div>
				<Link href='/' className='text-sm text-secondary font-medium'>
					See All
				</Link>
			</div>
			<div className='mt-2 w-full grid grid-cols-2'>
				{tabs.map((tab, index) => {
					return (
						<button
							key={index}
							onClick={() => setActiveTab(tab.name)}
							className={cn(
								"flex w-full group items-center text-left space-x-3 py-3 px-6 relative"
							)}>
							<div
								className={cn(
									"opacity-20 transition-all duration-500 group-hover:opacity-100",
									{
										"opacity-100": activeTab === tab.name,
									}
								)}>
								<Icons.FlowIcon />
							</div>
							<div className='space-y-2'>
								<div className='uppercase text-sm h-4'>{tab.label}</div>
								<div className='text-xl font-medium'>
									{formatAmount(tab.amount, "USD").split(".")[0]}
									<span className='text-sm text-tc-light-gray'>
										.{formatAmount(tab.amount, "USD").split(".")[1]}
									</span>
								</div>
							</div>
							<div
								className={cn(
									"h-[1px] transform transition-all w-full scale-x-0 bg-primary absolute bottom-0 -left-3",
									{
										"scale-x-100": activeTab === tab.name,
									}
								)}
							/>
						</button>
					);
				})}
			</div>
			<div className='space-y-5 pt-6 px-6'>
				{data.map((item, index) => {
					return (
						<div key={index} className=''>
							<div className='flex items-center space-x-4 justify-between'>
								<div className='flex items-center'>
									<div
										style={{
											backgroundColor: item.color,
										}}
										className={cn(
											"size-5 rounded-full mr-3 flex items-center justify-center"
										)}>
										<Icons.DownIcon />
									</div>
									<span className='text-lg font-medium mr-10'>{item.name}</span>
									<span className='text-xs'>%{item.percentage}</span>
								</div>
								<div>
									<span>{formatAmount(item.amount, "USD").split(".")[0]}</span>
									<span className='text-tc-light-gray'>
										.{formatAmount(item.amount, "USD").split(".")[1]}
									</span>
								</div>
							</div>
							<div className="mt-4 w-full bg-[url('/assets/icons/track.svg')] bg-cover bg-no-repeat bg-center">
								<div
									style={{
										width: `${item.percentage}%`,
										backgroundColor: item.color,
									}}
									className='h-2'
								/>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default CashFlow;
