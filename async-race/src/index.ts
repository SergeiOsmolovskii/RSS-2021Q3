import './css/main.css';
import { createBasicStructure } from './components/basicStructure';
import { renderGaragePage } from './renderPage';
import { renderWinnersPage } from './renderPage';
import { getWinners } from './api';
import { handler } from './handler';
 
createBasicStructure();
await renderGaragePage();
await renderWinnersPage();

await handler();
let a = getWinners(1, 'id', 'ASC');

console.log(a);