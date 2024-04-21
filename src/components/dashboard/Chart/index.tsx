"use client";

import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";

export const Chart = () => {
	const data = [
		{
			id: "gradientA",
			color: "#6935F5",
			data: [
				{
					x: "Jan 17",
					y: 213400,
				},
				{
					x: "Jan 25",
					y: 213000,
				},
				{
					x: "Feb 1",
					y: 213900,
				},
				{
					x: "Feb 7",
					y: 213040,
				},
				{
					x: "Feb 15",
					y: 212000,
				},
			],
		},
	];

	return (
		<ResponsiveLine
			data={data}
			margin={{ top: 30, right: 0, bottom: 50, left: 32 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: true,
				reverse: false,
			}}
			colors={{ datum: "color" }}
			fill={[{ match: { id: "gradientA" }, id: "gradientA" }]}
			defs={[
				{
					id: "gradientA",
					type: "linearGradient",
					colors: [
						{ offset: 0, color: "#6935F5" },
						{ offset: 100, color: "#fff" },
					],
				},
			]}
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
			areaOpacity={0.1}
			enableTouchCrosshair={true}
			useMesh={true}
			legends={[]}
		/>
	);
};
