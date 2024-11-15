import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";

export const TemperatureCard = ({
	temp,
	tempMin,
	tempMax,
}: WeatherPropsType) => {
	const roundedTemp = temp.toFixed(0);
	const roundedMinTemp = tempMin.toFixed(0);
	const roundedMaxTemp = tempMax.toFixed(0);

	return (
		<motion.section
			className="temperature-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="temp-left-column">
				<p className="temp-card-title">Temperature</p>
				<p className="temp-card-min">
					<span>Min:</span> {roundedMinTemp}°C
				</p>
				<p className="temp-card-max">
					<span>Max:</span> {roundedMaxTemp}°C
				</p>
			</div>

			<div className="temp-right-column">
				<p className="card-temp">
					{roundedTemp}
					<span>°C</span>
				</p>
			</div>
		</motion.section>
	);
};
