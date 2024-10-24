import { series } from './data.js';
const tableBody = document.getElementById("seriesTable");
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
