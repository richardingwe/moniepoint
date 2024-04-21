"use client";

import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { formatAmount } from "@/lib/utils";

export const Chart = () => {
	const data = [
		{
			id: "gradientC",
			color: "#6935F5",
			data: [
				{
					x: "Jan 17",
					y: 213470,
				},
				{
					x: "Jan 20",
					y: 212999,
				},
				{
					x: "Jan 25",
					y: 213600,
				},
				{
					x: "Jan 28",
					y: 213170,
				},
				{
					x: "Feb 1",
					y: 213900,
				},
				{
					x: "Feb 3",
					y: 213140,
				},
				{
					x: "Feb 7",
					y: 213040,
				},
				{
					x: "Feb 15",
					y: 212030,
				},
			],
		},
	];

	return (
		<ResponsiveLine
			data={data}
			margin={{ top: 30, right: 28, bottom: 50, left: 28 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: true,
				reverse: false,
			}}
			theme={{
				axis: {
					ticks: {
						text: {
							fill: "#98A2B3",
						},
					},
				},
				grid: {
					line: {
						stroke: "#98A2B3",
						opacity: 0.6,
						strokeWidth: 0.5,
						strokeDasharray: "4 4",
					},
				},
			}}
			colors={{ datum: "color" }}
			defs={[
				{
					id: "gradientC",
					type: "linearGradient",
					colors: [
						{ offset: 0.5, color: "#6935F5" },
						{ offset: 1, color: "#fff" },
					],
				},
			]}
			fill={[{ match: "*", id: "gradientC" }]}
			yFormat=' >-.2f'
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 0,
				tickPadding: 17,
				tickRotation: 0,
				legendOffset: 36,
				legendPosition: "middle",
				truncateTickAt: 0,
			}}
			axisLeft={null}
			enableGridY={false}
			enablePoints={false}
			pointSize={10}
			pointColor={{ theme: "background" }}
			pointBorderWidth={2}
			pointBorderColor={{ from: "serieColor" }}
			pointLabelYOffset={-12}
			enableArea={true}
			areaBlendMode='multiply'
			areaOpacity={0.19}
			enableTouchCrosshair={true}
			useMesh={true}
			legends={[]}
			enableSlices='x'
			sliceTooltip={({ slice }) => {
				return (
					<div
						style={{
							padding: "9px 12px",
						}}>
						{slice.points.map((point) => (
							<div
								className='text-sm bg-white py-6 drop-shadow-sm px-6 mb-1.5 flex items-center space-x-2.5'
								key={point.id}>
								<div className='size-5 rounded-full bg-secondary flex items-center justify-center'>
									<div className='size-2 rounded-full bg-white' />
								</div>
								<span className='text-tc-light-gray'>
									{point.data.x.toString()}:{" "}
								</span>
								<span className='font-semibold'>
									{formatAmount(+point.data.yFormatted, "USD")}
								</span>
							</div>
						))}
					</div>
				);
			}}
		/>
	);
};
