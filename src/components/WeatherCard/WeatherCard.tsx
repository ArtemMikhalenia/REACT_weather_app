import { motion } from "framer-motion";
import { WeatherPropsType } from "../../types";

import brokenClouds from "../../assets/images/weather-icons/cloudy.svg";
import clearSkyDay from "../../assets/images/weather-icons/sun-light.svg";
import clearSkyNight from "../../assets/images/weather-icons/сlear-night.svg";
import fewCloudsDay from "../../assets/images/weather-icons/partly-cloudy.svg";
import fewCloudsNight from "../../assets/images/weather-icons/partly-cloudy-night.svg";
import scatteredCloudsDay from "../../assets/images/weather-icons/cloudy-clear-at-times.svg";
import scatteredCloudsNight from "../../assets/images/weather-icons/cloudy-clear-at-times-night.svg";
import rainDay from "../../assets/images/weather-icons/rain.svg";
import rainNight from "../../assets/images/weather-icons/rain-night.svg";
import heavyRain from "../../assets/images/weather-icons/heavy-rain.svg";
import showerRainDay from "../../assets/images/weather-icons/scattered-showers.svg";
import showerRainNight from "../../assets/images/weather-icons/scattered-showers-night.svg";
import thunderstorm from "../../assets/images/weather-icons/rain&thunderstorm.svg";
import fog from "../../assets/images/weather-icons/fog.svg";
import snow from "../../assets/images/weather-icons/snow.svg";
import drizzleDay from "../../assets/images/weather-icons/drizzle&sun.svg";
import drizzleNight from "../../assets/images/weather-icons/drizzle-night.svg";

import location from "../../assets/images/icons/location.svg";

import clearSkyDayImg from "../../assets/images/weather-images/clearskyday.jpg";
import clearSkyNightImg from "../../assets/images/weather-images/clearskynight.jpg";
import cloudsImg from "../../assets/images/weather-images/clouds.jpg";
import drizzleImg from "../../assets/images/weather-images/drizzle.jpg";
import fogImg from "../../assets/images/weather-images/fog.jpg";
import rainImg from "../../assets/images/weather-images/rain.jpg";
import snowImg from "../../assets/images/weather-images/snow.jpg";
import thunderstormImg from "../../assets/images/weather-images/thunderstorm.jpg";

export const WeatherCard = ({
	city,
	latitude,
	longitude,
	mainDescription,
	description,
	sunrise,
	sunset,
	timezone,
}: WeatherPropsType) => {
	const currentTime = new Date();
	const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
	const offset = timezone / 60 / 60;
	const targetTime = new Date(utc + 3600000 * offset).toLocaleString("ru-RU", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	function convertToLocalTime(timestamp: number, timezoneOffset: number) {
		const date = new Date((timestamp + timezoneOffset) * 1000);
		const utcDate = new Date(date.getTime() - 3 * 60 * 60 * 1000);

		const timeString = utcDate.toLocaleTimeString("ru-RU", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		});

		return timeString;
	}

	const sunriseTime = convertToLocalTime(sunrise, timezone);
	const sunsetTime = convertToLocalTime(sunset, timezone);

	let timeOfDay;

	targetTime > sunriseTime && targetTime < sunsetTime
		? (timeOfDay = "light")
		: (timeOfDay = "dark");

	let iconSrc = clearSkyDay;
	let imageSrc = clearSkyDayImg;

	const weatherData = {
		thunderstorm: {
			types: [
				"thunderstorm with light rain",
				"thunderstorm with rain",
				"thunderstorm with heavy rain",
				"light thunderstorm",
				"thunderstorm",
				"heavy thunderstorm",
				"ragged thunderstorm",
				"thunderstorm with light drizzle",
				"thunderstorm with drizzle",
				"thunderstorm with heavy drizzle",
			],
			icon: thunderstorm,
			image: thunderstormImg,
		},
		drizzle: {
			types: [
				"light intensity drizzle",
				"drizzle",
				"heavy intensity drizzle",
				"light intensity drizzle rain",
				"drizzle rain",
				"heavy intensity drizzle rain",
				"shower rain and drizzle",
				"heavy shower rain and drizzle",
				"shower drizzle",
			],
			icon: timeOfDay === "light" ? drizzleDay : drizzleNight,
			image: drizzleImg,
		},
		snow: {
			types: [
				"light snow",
				"snow",
				"heavy snow",
				"sleet",
				"light shower sleet",
				"shower sleet",
				"light rain and snow",
				"rain and snow",
				"light shower snow",
				"shower snow",
				"heavy shower snow",
			],
			icon: snow,
			image: snowImg,
		},
		atmosphere: {
			types: [
				"mist",
				"smoke",
				"haze",
				"sand/dust whirls",
				"fog",
				"sand",
				"dust",
				"volcanic ash",
				"squalls",
				"tornado",
			],
			icon: fog,
			image: fogImg,
		},
		lightRain: {
			types: ["light rain", "moderate rain"],
			icon: timeOfDay === "light" ? rainDay : rainNight,
			image: rainImg,
		},
		heavyRain: {
			types: [
				"heavy intensity rain",
				"very heavy rain",
				"extreme rain",
				"freezing rain",
			],
			icon: heavyRain,
			image: rainImg,
		},
		showerRain: {
			types: [
				"light intensity shower rain",
				"shower rain",
				"heavy intensity shower rain",
				"ragged shower rain",
			],
			icon: timeOfDay === "light" ? showerRainDay : showerRainNight,
			image: rainImg,
		},
		clearSky: {
			types: ["clear sky"],
			icon: timeOfDay === "light" ? clearSkyDay : clearSkyNight,
			image: timeOfDay === "light" ? clearSkyDayImg : clearSkyNightImg,
		},
		fewClouds: {
			types: ["few clouds"],
			icon: timeOfDay === "light" ? fewCloudsDay : fewCloudsNight,
			image: cloudsImg,
		},
		scatteredClouds: {
			types: ["scattered clouds"],
			icon: timeOfDay === "light" ? scatteredCloudsDay : scatteredCloudsNight,
			image: cloudsImg,
		},
		brokenClouds: {
			types: ["broken clouds", "overcast clouds"],
			icon: timeOfDay === "light" ? brokenClouds : brokenClouds,
			image: cloudsImg,
		},
	};

	Object.values(weatherData).forEach((weather) => {
		if (weather.types.includes(description)) {
			iconSrc = weather.icon;
			imageSrc = weather.image;
		}
	});

	return (
		<motion.section
			className="weather-card"
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
				transition: { duration: 0.7 },
			}}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="weather-left-column">
				<div className="weather-left-column-city">
					<div className="left-column-city">
						<p className="weather-card-city">{city}</p>
						<a
							className="weather-card-link"
							href={`http://maps.google.com/?q=${latitude},${longitude}`}
							target="_blank"
							rel="noreferrer"
						>
							Check location on Google Maps
						</a>
					</div>
					<img className="location-icon" src={location} alt="location-icon" />
				</div>
				<div className="weather-left-column-description">
					<div className="left-column-description">
						<p className="weather-card-title">{mainDescription}</p>
						<p className="weather-card-description">{description}</p>
					</div>
					<img className="weather-icon" src={iconSrc} alt="weather-icon" />
				</div>
			</div>
			<div className="weather-right-column">
				<img src={imageSrc} alt="weather-image" />
			</div>
		</motion.section>
	);
};
