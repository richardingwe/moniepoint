import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import Link from "next/link";

const RecentTransactions = () => {
	const data = [
		{
			name: "Stripe",
			amount: 122300,
			date: "Wed, 16 Feb, 18:11",
			category: "business",
			icon: <Icons.StripeIcon />,
		},
		{
			name: "Drop Box",
			amount: -20000,
			date: "Tues, 15 Feb, 14:24",
			category: "equipment",
			icon: <Icons.DropBoxIcon />,
		},
		{
			name: "Zendesk",
			amount: -122300,
			date: "Wed, 16 Feb, 18:11",
			category: "maintenance",
			icon: <Icons.ZendeskIcon />,
		},
		{
			name: "Stripe",
			amount: -20000,
			date: "Mon, 14 Feb, 16:40",
			category: "entertainment",
			icon: <Icons.SpotifyIcon />,
		},
	];
	return (
		<section className=''>
			<div className='flex items-end justify-between pb-6 border-b'>
				<div className='flex items-end space-x-3'>
					<div className='flex items-center space-x-2'>
						<Icons.RecentTransactionsIcon />
						<h3 className='text-xl font-semibold'>Recent Transactions</h3>
					</div>
					<div className='text-sm text-tc-light-gray mb-0.5'>
						Last 5 Activity
					</div>
				</div>
				<Link href='/' className='text-sm text-secondary font-medium'>
					See All
				</Link>
			</div>
			<div className='pt-2'>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className='px-5 py-3 border-b transition-all group hover:bg-gray-100 cursor-pointer flex items-center justify-between space-x-4'>
							<div className='flex w-[400px] transition-all items-center space-x-2.5 group-hover:pl-2.5'>
								{item.icon}
								<div className='space-y-1'>
									<div className='font-medium h-[18px]'>{item.name}</div>
									<div className='text-sm text-tc-light-gray left-6'>
										{item.date}
									</div>
								</div>
							</div>
							<div className='w-[200px]'>
								<div className='capitalize w-fit text-sm px-3 py-2.5 font-medium transition-all bg-gray-100/60 group-hover:bg-white'>
									{item.category}
								</div>
							</div>
							<div
								className={cn("w-[200px] text-right", {
									"text-[#396E67]": item.amount > 0,
								})}>
								{item.amount < 0 && "-"}
								{formatAmount(item.amount, "USD")
									.split(".")[0]
									?.replace("-", "")}
								<span
									className={cn("text-tc-light-gray", {
										"text-[#396E67]/60": item.amount > 0,
									})}>
									.{formatAmount(item.amount, "USD").split(".")[1]}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default RecentTransactions;
