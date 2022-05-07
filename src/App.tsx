import styles from "./styles/app.module.scss";
import { CustomizableButton } from "./web/components/customizable-button";

const App = () => {
	return (
		<div className={styles.container}>
			<CustomizableButton />
			<CustomizableButton variant="text" text="Text variant" />
			<CustomizableButton variant="outline" text="Outline variant" />
			<CustomizableButton disableShadow text="Shadow disabled" />
			<CustomizableButton disabled text="Button disabled" />
			<CustomizableButton
				variant="text"
				text="Button disabled & variant text"
			/>
			<CustomizableButton startIcon text="Start icon" />
			<CustomizableButton endIcon text="End icon" />
			<CustomizableButton size="sm" text="Small" />
			<CustomizableButton size="md" text="Medium" />
			<CustomizableButton size="lg" text="Large" />
			<CustomizableButton color="primary" text="Primary color" />
			<CustomizableButton color="secondary" text="Secondary color" />
			<CustomizableButton color="danger" text="Danger color" />
		</div>
	);
};

export default App;
