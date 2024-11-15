import logo from "../../assets/images/icons/logo.svg";
import { motion } from "framer-motion";
import "./header.css";

function Header() {
	return (
		<header className="header">
			<motion.div
				className="header-container"
				initial={{ opacity: 0, y: -70 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5 },
				}}
				viewport={{ once: true, amount: 0.1 }}
			>
				<img src={logo} alt="logo" />
				<h1>Weather App</h1>
			</motion.div>
		</header>
	);
}

export default Header;
