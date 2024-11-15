import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";

export const FeelsCard = ({ feelsLike }: WeatherPropsType) => {
	const roundedTemp = feelsLike.toFixed(0);
	return (
		<motion.section
			className="feels-like-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="feels-like-left-column">
				<p className="feels-like-card-title">Feels like</p>
				<p className="feels-like-card-data">
					<span>Feels like:</span> {roundedTemp}°C
				</p>
			</div>

			<div className="feels-like-right-column">
				<p className="card-temp">
					{roundedTemp}
					<span>°C</span>
				</p>
			</div>
		</motion.section>
	);
};
