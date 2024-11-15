import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";
import visibilityIcon from "../../assets/images/icons/visibility.svg";

export const VisibilityCard = ({ visibility }: WeatherPropsType) => {
	return (
		<motion.section
			className="visibility-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="visibility-left-column">
				<p className="visibility-card-title">Visibility</p>
				<p className="visibility-card-data">
					<span>Visibility:</span> {Math.floor(visibility / 1000)} km
				</p>
			</div>

			<div className="visibility-right-column">
				<img
					className="visibility-icon"
					src={visibilityIcon}
					alt="visibility-icon"
				/>
			</div>
		</motion.section>
	);
};
