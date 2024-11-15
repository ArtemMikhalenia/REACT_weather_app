import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";
import windIcon from "../../assets/images/icons/wind.svg";

export const WindCard = ({
	windSpeed,
	windGust,
	windDirection,
}: WeatherPropsType) => {
	return (
		<motion.section
			className="wind-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="wind-left-column">
				<p className="wind-card-title">Wind</p>
				<p className="wind-card-speed">
					<span>Speed:</span> {windSpeed} m/s
				</p>
				<p className="wind-card-gust">
					<span>Gust:</span> {windGust} m/s
				</p>
				<p className="wind-card-direction">
					<span>Direction:</span> {windDirection}&#176;
				</p>
			</div>

			<div className="wind-right-column">
				<img className="wind-icon" src={windIcon} alt="wind-icon" />
			</div>
		</motion.section>
	);
};
