document.addEventListener("DOMContentLoaded", function () {
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function getCurrentTemperature() {
        const temperature = (Math.random() * 40).toFixed(1);
        return `${temperature} °C`;
    }

    function updateDynamicContent() {
        const currentTimeElement = document.getElementById('current-time');
        const currentTemperatureElement = document.getElementById('current-temperature');

        currentTimeElement.textContent = `Hora actual: ${getCurrentTime()}`;
        currentTemperatureElement.textContent = `Temperatura: ${getCurrentTemperature()}`;
    }

   
    function updateNightMode() {
        const body = document.body;
        const isNight = new Date().getHours() >= 18;

        if (isNight) {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    }

    setInterval(updateDynamicContent, 1000);
    setInterval(updateNightMode, 60000); 
    updateNightMode(); 
});
