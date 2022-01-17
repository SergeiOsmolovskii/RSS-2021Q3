import './css/main.css';
import { createBasicStructure } from './components/basicStructure';
import { renderGaragePage } from './renderPage';
import { renderWinnersPage } from './renderPage';
import { handler } from './handler';
 
createBasicStructure();
await renderGaragePage();
await renderWinnersPage();
await handler();