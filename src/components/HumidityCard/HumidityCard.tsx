import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";
import humidityIcon from "../../assets/images/icons/humidity.svg";

export const HumidityCard = ({ humidity }: WeatherPropsType) => {
	return (
		<motion.section
			className="humidity-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="humidity-left-column">
				<p className="humidity-card-title">Humidity</p>
				<p className="humidity-card-data">
					<span>Humidity:</span> {humidity}%
				</p>
			</div>

			<div className="humidity-right-column">
				<img className="humidity-icon" src={humidityIcon} alt="humidity-icon" />
			</div>
		</motion.section>
	);
};
