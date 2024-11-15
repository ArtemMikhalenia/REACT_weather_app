import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";
import pressureIcon from "../../assets/images/icons/pressure.svg";

export const PressureCard = ({ pressure }: WeatherPropsType) => {
	return (
		<motion.section
			className="pressure-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="pressure-left-column">
				<p className="pressure-card-title">Pressure</p>
				<p className="pressure-card-data">
					<span>Pressure:</span> {pressure} hPa
				</p>
			</div>

			<div className="pressure-right-column">
				<img className="pressure-icon" src={pressureIcon} alt="pressure-icon" />
			</div>
		</motion.section>
	);
};
