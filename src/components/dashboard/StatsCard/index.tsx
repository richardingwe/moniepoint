"use client";

import Button from "@/components/global/Button";
import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Chart } from "../Chart";

type StatsCardProps = {
	item: {
		name: string;
		amount: number;
		trendValue: number;
		icon: JSX.Element;
		iconHover?: JSX.Element;
		iconExpanded?: JSX.Element;
		actionText: string;
		style?: string;
	};
	setStatsClicked: (name: string) => void;
	statsClicked: string;
	index: number;
};

const StatsCard = ({ item, setStatsClicked, statsClicked }: StatsCardProps) => {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		if (statsClicked !== item.name) {
			setExpanded(false);
		}
	}, [statsClicked]);

	return (
		<article
			dir='ltr'
			className={cn(
				"cursor-pointer transition-min-width min-w-[30%] duration-500 relative bg-white group drop-shadow-sm px-10 py-8 h-[213px]",
				{
					"min-w-[900px] flex items-center": expanded,
				}
			)}>
			<div>
				<div className='size-14 relative flex items-center justify-center mb-5'>
					<span
						className={cn(
							"absolute left-0 top-0 transition-opacity duration-700 ease-in-out group-hover:opacity-0",
							{
								"opacity-0": expanded,
							}
						)}>
						{item.icon}
					</span>
					<span
						className={cn(
							"absolute left-1 top-1 transition-opacity duration-700 ease-in-out opacity-0 ",
							item?.style,
							{
								"group-hover:opacity-100": !expanded,
							}
						)}>
						{item.iconHover}
					</span>
					<span
						className={cn(
							"absolute left-1 top-1 transition-opacity duration-700 ease-in-out opacity-0",
							item?.style,
							{
								"opacity-100": expanded,
							}
						)}>
						{item.iconExpanded}
					</span>
				</div>
				<div className='font-medium flex items-center space-x-4 h-4 mb-5'>
					<div className='uppercase whitespace-nowrap'>{item.name}</div>
					<div className='text-xs flex items-center space-x-2'>
						{item.trendValue > 0 ? (
							<Icons.TrendUpIcon />
						) : (
							<Icons.TrendDownIcon />
						)}
						<div>{item.trendValue}%</div>
						<div
							className={cn(
								"transform transition-all whitespace-nowrap scale-x-0 overflow-hidden",
								{
									"scale-x-100": expanded,
								}
							)}>
							VS. LAST WEEK
						</div>
					</div>
				</div>
				<div className='overflow-hidden h-12'>
					<div
						className={cn(
							"font-medium transform duration-300 transition-all mt-1.5 text-[32px] h-8 leading-6",
							{
								"group-hover:-translate-y-[200%]": !expanded,
								"text-4xl": expanded,
							}
						)}>
						{expanded ? (
							<div className='flex'>
								<span className='text-2xl mr-1'>$</span>
								<span>
									{formatAmount(item.amount, "USD")
										.split(".")[0]
										.replace("$", "")}
								</span>
								{item.name === "tax reserve" && (
									<span className='text-2xl mt-2 text-tc-light-gray'>
										.{formatAmount(item.amount, "USD").split(".")[1]}
									</span>
								)}
							</div>
						) : (
							<span>{formatAmount(item.amount, "USD").split(".")[0]}</span>
						)}
						{item.name === "tax reserve" && (
							<span className='text-xl text-tc-light-gray'>
								.{formatAmount(item.amount, "USD").split(".")[1]}
							</span>
						)}
					</div>
					<div
						className={cn(
							"flex px-[2px] h-12 items-center space-x-4 transform duration-300 transition-all translate-y-[200%]",
							{
								"group-hover:-translate-y-10": !expanded,
							}
						)}>
						<Button theme='plain' className='border flex-1 h-11 capitalize'>
							{item.actionText}
						</Button>
						<button
							onClick={() => {
								setExpanded(true);
								setStatsClicked(item.name);
							}}>
							<Icons.ChartIcon />
						</button>
					</div>
				</div>
			</div>
			<div
				className={cn("h-0 w-0 mt-0", {
					"w-full h-[190px]": expanded,
				})}>
				<Chart />
			</div>
			<div
				className={cn(
					"h-0 transition-width group-hover:h-1 absolute bottom-0 transform left-1/2 -translate-x-1/2 bg-[#DCDFE7]",
					{
						"w-[calc(100%-80px)]": !expanded,
						"w-[calc(100%-32px)] left-0 -translate-x-0 h-1 bg-[#C1B4F8]":
							expanded,
					}
				)}
			/>
			<button
				onClick={() => {
					setExpanded(!expanded);
				}}
				className={cn(
					"w-8 scale-x-0 flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 h-[calc(100%-64px)] bg-gray-100/60",
					{
						"scale-x-100": expanded,
					}
				)}>
				<Icons.CaretIcon />
			</button>
		</article>
	);
};

export default StatsCard;
