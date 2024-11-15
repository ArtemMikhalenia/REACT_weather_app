import { WeatherPropsType } from "../../types";
import { TemperatureCard } from "../TemperatureCard/TemperatureCard";
import { WindCard } from "../WindCard/WindCard";
import { VisibilityCard } from "../VisibilityCard/VisibilityCard";
import { HumidityCard } from "../HumidityCard/HumidityCard";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { FeelsCard } from "../FeelsCard/FeelsCard";
import { PressureCard } from "../PressureCard/PressureCard";
import "./dashboard.css";

export const Dashboard = (props: WeatherPropsType) => {
	return (
		<div className="dashboard">
			<WeatherCard {...props} />
			<TemperatureCard {...props} />
			<WindCard {...props} />
			<VisibilityCard {...props} />
			<HumidityCard {...props} />
			<FeelsCard {...props} />
			<PressureCard {...props} />
		</div>
	);
};
