import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
	const state = JSON.parse(localStorage.getItem("theme") || "false");
	const [lightMode, setLightMode] = useState<boolean>(state);

	useEffect(() => {
		if (lightMode) {
			document.body.classList.add("day-theme");
		} else {
			document.body.classList.remove("day-theme");
		}
		localStorage.setItem("theme", JSON.stringify(lightMode));
	}, [lightMode]);

	function toggleLightMode(): void {
		setLightMode((prevMode) => !prevMode);
	}

	return (
		<div className="app">
			<Header />
			<Main />
			<motion.div
				className="toggle-theme"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5 },
				}}
				viewport={{ once: true, amount: 0.1 }}
			>
				<label className="switch">
					<input
						type="checkbox"
						checked={lightMode}
						id="slider"
						onChange={toggleLightMode}
					/>
					<span className="slider round"></span>
				</label>
			</motion.div>
		</div>
	);
}

export default App;
