import { Serie } from './series.js';
import { series} from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promediotemporadasElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);

promediotemporadasElm.innerHTML = `${promediotemporadas(series)}`

function renderSeriesInTable(series: Serie[]): void{
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td>${serie.nombre}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function promediotemporadas(series: Serie[]): number {
    let total: number = 0;
    const cantidadSeries: number = series.length;
    series.forEach((serie) => total = total + serie.seasons);
    const averageSeasons: number = total/cantidadSeries;
    return averageSeasons;    

}