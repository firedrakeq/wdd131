// Set footer copyright year and last modified date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static weather values matching HTML content (Metric: °C and km/h)
const temperature = 10;
const windSpeed = 5;

// Single-line function to calculate wind chill (Metric formula)
const calculateWindChill = (temp, speed) => (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Only call calculateWindChill if conditions are met
const windChillDisplay = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillDisplay.textContent = "N/A";
}
