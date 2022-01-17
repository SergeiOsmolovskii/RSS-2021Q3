import { createCar } from "./garage";
export const createWinnersSwitchButtons = () => `
    <div class="switch-buttons-block">
      <button class="switch-buttons switch-buttons__garage">To garage</button>
      <button class="switch-buttons switch-buttons__winners">To winners</button>
    </div>
`;

export const createWinnersSection = async (winnersCount: number, winnersPage: number) => `
  <h2>Winners (<span id="winners-count"> ${winnersCount} </span>) </h2>
  <h3>Page #<span id="page-number"> ${winnersPage} </span> </h3>
`;

export const createWinnersTable = () => `
  <table class="winners-table">
    <thead class="winners-table__head">
      <tr> 
        <th class="winners-table__number">Number</th>
        <th class="winners-table__car">Car</th>
        <th class="winners-table__name">Name</th>
        <th class="winners-table__wins">Wins</th>
        <th class="winners-table__best-time">Best time (seconds)</th>
      </tr>
    </thead>
    <tbody class="winners-table__body"
    </tbody>
  </table>
`;

export const createWinners = (carNumber: number, carName: string, carColor: string, carWins: number, carBestTime: number) => `
  <tr> 
    <th class="winners-table__number">${carNumber}</th>
    <th class="winners-table__car">${createCar(carColor)}</th>
    <th class="winners-table__name">${carName}</th>
    <th class="winners-table__wins">${carWins}</th>
    <th class="winners-table__best-time">${carBestTime}</th>
  </tr>
`;