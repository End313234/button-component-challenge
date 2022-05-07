import { Airplane } from "phosphor-react";

import styles from "./styles.module.scss";

interface CustomizableButtonProps {
	variant?: "default" | "outline" | "text";
	disableShadow?: boolean;
	startIcon?: boolean;
	endIcon?: boolean;
	size?: "lg" | "md" | "sm";
	color?: "danger" | "default" | "primary" | "secondary";
	text?: string;
	disabled?: boolean;
}

export const CustomizableButton = ({
	text,
	disabled,
	startIcon,
	endIcon,
	...filteredProps
}: CustomizableButtonProps) => {
	const MIN_CLASS_NAMES_LENGTH = 1;
	let classNames = Object.entries(filteredProps).map(([key, value]) => {
		if (key === "disableShadow" && value) {
			return "no-shadow";
		} else if (key === "disableShadow") {
			return "";
		}

		return `${key}-${value}`;
	});

	if (startIcon) {
		classNames.push("flex-row");
	} else if (endIcon) {
		classNames.push("flex-row-reverse");
	}

	classNames = classNames.map(className => styles[className]);
	const stringifiedClassNames = classNames.join(" ");

	return (
		<button
			className={`${styles.button} ${
				classNames.length < MIN_CLASS_NAMES_LENGTH
					? styles["default-button"]
					: stringifiedClassNames
			}`}
			disabled={disabled}
		>
			{(startIcon || endIcon) && <Airplane />}
			{text ?? "Default"}
		</button>
	);
};
