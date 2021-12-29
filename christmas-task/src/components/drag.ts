const reCalcCount = () => {
    const selectedToys = document.querySelectorAll('.selected-toy');
    selectedToys.forEach(item => {
        const itemToyСount = item.querySelector('.selected-toy__count');
        itemToyСount.textContent = item.querySelectorAll('img').length.toString(); 
    });
}


export const dragEvents = async () => {

    const draggable = document.querySelectorAll('[draggable]');
    const targets = document.querySelectorAll('[data-drop-target]');
    const handleDragStart = (e: DragEvent) => {
        const currentElement = (e.target as HTMLElement);
        e.dataTransfer.setData('ID', currentElement.id);
    }
    
    const handleDragEnterLeave = (e: Event) => {
        const currentElement = (e.target as HTMLElement);
        if (e.type == 'dragenter') {
            currentElement.classList.add('drag-enter');
        } else {
            currentElement.classList.remove('drag-enter');
        }
    }
    
    const handleOverDrop = (e: DragEvent) => {
        const currentElement = (e.target as HTMLElement);
        let elemBelow = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
        e.preventDefault(); 
        if (e.type != 'drop') {
            return; 
        }
        const draggedId = e.dataTransfer.getData('ID');
        const draggedEl = document.getElementById(draggedId);
        
        if (currentElement.tagName == 'IMG') {
            return;
        }

        if (e.type == 'drop') {
            draggedEl.style.left = `${(e.offsetX - draggedEl.offsetWidth / 2) + 30}px`;
            draggedEl.style.top = `${(e.offsetY - draggedEl.offsetHeight / 2) + 30}px`;
        }

        if (e.type == 'drop' && elemBelow.dataset.imgNum == draggedEl.dataset.cardNum) {
            draggedEl.style.left = `50%`;
            draggedEl.style.top = `50%`;
        }
        
        if (draggedEl.parentNode == e.target) {
            currentElement.classList.remove('drag-enter');
            return;
        }

        draggedEl.parentNode.removeChild(draggedEl);

        currentElement.appendChild(draggedEl); 
        currentElement.classList.remove('drag-enter');
        reCalcCount();
    }
    
    for (let i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", handleDragStart);
    }

    for (let i = 0; i < targets.length; i++) {
        targets[i].addEventListener('dragover', handleOverDrop);
        targets[i].addEventListener('drop', handleOverDrop);
        targets[i].addEventListener('dragenter', handleDragEnterLeave);
        targets[i].addEventListener('dragleave', handleDragEnterLeave);
    }
}