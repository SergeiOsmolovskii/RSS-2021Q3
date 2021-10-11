"use strict"

    const ticetTypes = document.getElementsByName('ticket-type');
    const basickTicketsAmount = document.getElementById('amount-basic');
    const seniorTicketAmount = document.getElementById('amount-senior');
    const formBasickTicketsAmount = document.getElementById('form-amount-basic');
    const formSeniorTicketAmount = document.getElementById('form-amount-senior');
    const basicTicketsTotalPrice = document.querySelector('.basik-ticket-total');
    const seniorTicketsTotalPrice = document.querySelector('.senior-ticket-total');
    const ticketsTypeSelect = document.querySelector('.tickets-type-select'); 
    const payInfo = document.querySelector('.pay-info'); 
    const totalPrice = document.querySelectorAll('.price');
    
    let totalTicketsPrice = 0;
    let totalBasicTicketsPrice = 0;
    let totalSeniorTicketsPrice = 0;

const calcTotalPrice = () => {
    
    basickTicketsAmount.value = localStorage.getItem('basickTicketsAmount') || 1;
    seniorTicketAmount.value = localStorage.getItem('seniorTicketAmount') || 1;
    formBasickTicketsAmount.value = localStorage.getItem('basickTicketsAmount') || 1;
    formSeniorTicketAmount.value = localStorage.getItem('seniorTicketAmount') || 1;
    payInfo.textContent = localStorage.getItem('selectedTicketType') || 'Permanent exhibition';
  
    function selectTicketType() {
      localStorage.setItem('selectedTicketType', this.value);
      payInfo.textContent = localStorage.getItem('selectedTicketType');
      recalcPrice();
    } 
    
    const ticketPrise = () => {
      switch (localStorage.getItem('selectedTicketType')) {
        case 'Permanent exhibition' : 
          localStorage.setItem('ticketPrice', 20);
          ticketsTypeSelect.selectedIndex = 1;
          break;
        case 'Temporary exhibition':  
          localStorage.setItem('ticketPrice', 25);
          ticketsTypeSelect.selectedIndex = 2;
          break;
        case 'Combined Admission':
          localStorage.setItem('ticketPrice', 40);
          ticketsTypeSelect.selectedIndex = 3;
          break;
      }
    }
  
    const changeTicketTypeSelect = () => {
      ticetTypes.forEach(item => {
        item.onchange = selectTicketType;
        if (localStorage.getItem('selectedTicketType') === item.value) item.checked = true;
      });
    }
   
    const recalcPrice = () => {
      ticketPrise();
      totalBasicTicketsPrice = localStorage.getItem('basickTicketsAmount') * localStorage.getItem('ticketPrice');
      totalSeniorTicketsPrice = localStorage.getItem('seniorTicketAmount') * (localStorage.getItem('ticketPrice') / 2);
      totalTicketsPrice = totalBasicTicketsPrice + totalSeniorTicketsPrice;
      basicTicketsTotalPrice.textContent = totalBasicTicketsPrice;
      seniorTicketsTotalPrice.textContent = totalSeniorTicketsPrice;
      totalPrice.forEach(item => item.textContent = totalTicketsPrice); 
    }
    
    ticketsTypeSelect.addEventListener('change', (e) => {
      localStorage.setItem('selectedTicketType', e.target.value);
      payInfo.textContent = localStorage.getItem('selectedTicketType')
      console.log(e.target);
      changeTicketTypeSelect();
      recalcPrice();
    });
  
    const ticketPlus = (ticketTypeID, ticketTypeFormID, ticketTypeName) => {
      const ticket = document.getElementById(ticketTypeID);
      const ticketForm = document.getElementById(ticketTypeFormID);
  
      ticket.previousElementSibling.stepUp();
      ticketForm.previousElementSibling.stepUp();
      localStorage.setItem(ticketTypeName, ticket.previousElementSibling.value);
      recalcPrice();
    }
  
    const ticketMinus = (ticketTypeID, ticketTypeFormID, ticketTypeName) => {
      const ticket = document.getElementById(ticketTypeID);
      const ticketForm = document.getElementById(ticketTypeFormID);
  
      ticket.nextElementSibling.stepDown();
      ticketForm.nextElementSibling.stepDown();
      localStorage.setItem(ticketTypeName, ticket.nextElementSibling.value);
      recalcPrice();
    }
    
    amountBasicPlus.addEventListener('click', () =>  ticketPlus('amountBasicPlus', 'formAmountBasicPlus', 'basickTicketsAmount'));
    amountSeniorPlus.addEventListener('click', () =>  ticketPlus('amountSeniorPlus', 'formAmountSeniorPlus', 'seniorTicketAmount'));
    formAmountBasicPlus.addEventListener('click', () =>  ticketPlus('amountBasicPlus', 'formAmountBasicPlus', 'basickTicketsAmount'));
    formAmountSeniorPlus.addEventListener('click', () =>  ticketPlus('amountSeniorPlus', 'formAmountSeniorPlus', 'seniorTicketAmount'));
    amountBasicMinus.addEventListener('click', () =>  ticketMinus('amountBasicMinus', 'formAmountBasicMinus' , 'basickTicketsAmount'));
    amountSeniorMinus.addEventListener('click', () =>  ticketMinus('amountSeniorMinus', 'formAmountSeniorMinus', 'seniorTicketAmount'));
    formAmountBasicMinus.addEventListener('click', () =>  ticketMinus('amountBasicMinus', 'formAmountBasicMinus' , 'basickTicketsAmount'));
    formAmountSeniorMinus.addEventListener('click', () =>  ticketMinus('amountSeniorMinus', 'formAmountSeniorMinus', 'seniorTicketAmount'));
  
    recalcPrice();
    changeTicketTypeSelect();
  }

  export default calcTotalPrice;