import { series } from './data.js';
const tableBody = document.getElementById("seriesTable");
const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
series.forEach((serie) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(row);
});
// Mostrar el promedio de temporadas
const container = document.querySelector(".container");
const averageElement = document.createElement("p");
averageElement.textContent = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`;
container === null || container === void 0 ? void 0 : container.appendChild(averageElement);
