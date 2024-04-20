export type ButtonProps = {
	/**
	 * The type of the button
	 * @type {string}
	 * @example
	 * <Button type="button" />
	 * @default "button"
	 * @note "button" | "submit" | "reset"
	 */
	type?: "button" | "submit" | "reset";
	/**
	 * The button is loading
	 * @type {boolean}
	 * @example
	 * <Button loading />
	 * @default false
	 * @note this is optional
	 */
	loading?: boolean;
	/**
	 * The button is disabled
	 * @type {boolean}
	 * @example
	 * <Button disabled />
	 * @default false
	 * @note this is optional
	 */
	disabled?: boolean;
	/**
	 * The theme of the button
	 * @type {string}
	 * @example
	 * <Button theme="primary" />
	 * @default "primary"
	 * @note "primary" | "secondary" | "plain" | "outline" | "distorted"
	 * @note this is optional
	 */
	theme?: "primary" | "secondary" | "plain" | "outline" | "distorted";
	/**
	 * The tag of the button
	 * @type {string}
	 * @example
	 * <Button tag="button" />
	 * @default "button"
	 * @note "button" | "a"
	 * @note this is optional
	 */
	tag?: "button" | "a";
	/**
	 * The button is external
	 * @type {boolean}
	 * @example
	 * <Button isExternal />
	 * @default false
	 * @note this is optional
	 */
	isExternal?: boolean;
	/**
	 * The button is outlined
	 * @type {boolean}
	 * @example
	 * <Button outline />
	 * @default false
	 * @note this is optional
	 */
	outline?: boolean;
	/**
	 * The icon of the button
	 * @type {string}
	 * @example
	 * <Button icon="icon" />
	 * @default undefined
	 * @note this is optional
	 */
	icon?: string;
	/**
	 * The href of the button
	 * @type {string}
	 * @example
	 * <Button tag='a' href="https://example.com" />
	 * @default undefined
	 * @note this is optional
	 */
	href?: string;
	/**
	 * The size of the button
	 * @type {string}
	 * @example
	 * <Button size="sm" />
	 * @default "md"
	 * @note "sm" | "md" | "lg" | "xl" | "plain"
	 * @note this is optional
	 */
	size?: "sm" | "md" | "lg" | "xl" | "plain";
	/**
	 * The button is underlined
	 * @type {boolean}
	 * @example
	 * <Button underline />
	 * @default false
	 * @note this is optional
	 */
	underline?: boolean;
	/**
	 * The button's className
	 * @type {string}
	 * @example
	 * <Button className="text-red-500" />
	 * @default undefined
	 * @note this is optional
	 */
	className?: string;
	/**
	 * The children of the button
	 * @type {string | React.ReactNode}
	 * @example
	 * <Button>Click Me</Button>
	 * @example
	 * <Button>
	 * 	<div>
	 * 		<Icons.Icon />
	 * 		<div>Click Me</div>
	 * 	</div>
	 * </Button>
	 * @default undefined
	 * @note this is optional
	 */
	children: string | React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children"> &
	Omit<React.ComponentProps<"a">, "children">;
