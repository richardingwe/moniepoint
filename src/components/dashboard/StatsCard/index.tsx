"use client";

import Icons from "@/components/icons";
import { formatAmount } from "@/lib/utils";

type StatsCardProps = {
	item: {
		name: string;
		amount: number;
		trendValue: number;
		icon: JSX.Element;
	};
};

const StatsCard = ({ item }: StatsCardProps) => {
	return (
		<article className='w-full bg-white drop-shadow-md px-10 py-8 space-y-6'>
			{item.icon}
			<div className='font-medium flex items-center space-x-4'>
				<div className='uppercase'>{item.name}</div>
				<div className='text-xs flex items-center space-x-2'>
					{item.trendValue > 0 ? (
						<Icons.TrendUpIcon />
					) : (
						<Icons.TrendDownIcon />
					)}
					<div>{item.trendValue}%</div>
				</div>
			</div>
			<div className='font-medium text-[32px] leading-6'>
				{formatAmount(item.amount, "USD")}
			</div>
		</article>
	);
};

export default StatsCard;
