import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promediotemporadasElm = document.getElementById("average-seasons");
renderSeriesInTable(series);
promediotemporadasElm.innerHTML = "".concat(promediotemporadas(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>").concat(serie.nombre, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function promediotemporadas(series) {
    var total = 0;
    var cantidadSeries = series.length;
    series.forEach(function (serie) { return total = total + serie.seasons; });
    var averageSeasons = total / cantidadSeries;
    return averageSeasons;
}
