import { series } from './data.js';
import { Serie } from './serie.js';

const tableBody = document.getElementById("seriesTable") as HTMLTableSectionElement;

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
