import { series } from './data.js';
import { Serie } from './serie.js';

const tableBody = document.getElementById("seriesTable") as HTMLTableSectionElement;

const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;


    series.forEach((serie:Serie) => {
        const row =tableBody.insertRow();
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody?.appendChild(row);
    });

// Mostrar el promedio de temporadas
const container = document.querySelector(".container");
const averageElement = document.createElement("p");
averageElement.textContent = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`;
container?.appendChild(averageElement);
