import { ChangeEvent, useState, KeyboardEvent, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Dashboard } from "../Dashboard/Dashboard";
import { WeatherPropsInterface } from "../../interfaces";
import notFound from "../../assets/images/Not found.png";
import "./main.css";

function Main() {
	const [city, setCity] = useState<string>("");
	const [error, setError] = useState<null | string>(null);
	const [weather, setWeather] = useState<WeatherPropsInterface | null>(null);
	const [disabled, setDisabled] = useState(true);

	const fetchWeather = async (
		event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		event.preventDefault();
		const apiKey: string = "de1087b67eff3e6deccf3693af68febf";
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
			);
			const json = await response.json();
			if (json.cod === "404" || json.cod === "400") {
				setError("Oops... City not found. Try again!");
				setWeather(null);
			} else {
				const weatherData: WeatherPropsInterface = {
					city: json.name,
					temp: json.main.temp,
					latitude: json.coord.lat,
					longitude: json.coord.lon,
					mainDescription: json.weather[0].main,
					description: json.weather[0].description,
					tempMin: json.main.temp_min,
					tempMax: json.main.temp_max,
					windSpeed: json.wind.speed,
					windGust: json.wind.gust,
					windDirection: json.wind.deg,
					visibility: json.visibility,
					humidity: json.main.humidity,
					feelsLike: json.main.feels_like,
					pressure: json.main.pressure,
					sunrise: json.sys.sunrise,
					sunset: json.sys.sunset,
					timezone: json.timezone,
				};
				setWeather(weatherData);
				setError(null);
			}
		} catch (error) {
			console.error("Error:", error);
			setError("Oops... City not found. Try again!");
			setWeather(null);
		}
	};

	const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
		event.currentTarget.value !== "" ? setDisabled(false) : setDisabled(true);
		return setCity(event.currentTarget.value);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") fetchWeather(event);
	};

	return (
		<main className="main-container">
			<section className="main-section">
				<div className="search-block">
					<motion.input
						type="text"
						placeholder="Type your city"
						onChange={handleInput}
						onKeyDown={handleKeyDown}
						value={city}
						initial={{ opacity: 0, x: -50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 0.5 },
						}}
						viewport={{ once: true, amount: 0.1 }}
					/>
					<motion.button
						onClick={fetchWeather}
						disabled={disabled}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 0.5 },
						}}
						whileHover={disabled ? {} : { scale: 1.05 }}
						viewport={{ once: true, amount: 0.1 }}
					>
						Get weather
					</motion.button>
				</div>
				{weather && !error && <Dashboard {...weather} />}
				{error && (
					<motion.div
						className="error-block"
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.5 },
						}}
						viewport={{ once: true, amount: 0.1 }}
					>
						<img src={notFound} alt="not-found" />
						<p>{error}</p>
					</motion.div>
				)}
			</section>
		</main>
	);
}

export default Main;
