
export const dragEvents = () => {

    const handleDragStart = (e: DragEvent) => {
        const currentElement = (e.target as HTMLElement)
        e.dataTransfer.setData("text", currentElement.id);
    }
    
    
    const handleDragEnterLeave = (e: DragEvent) => {
        const currentElement = (e.target as HTMLElement);
        if(e.type == "dragenter") {
            currentElement.className = 'drag-enter'; 
        } else {
            currentElement.className = '';
        }
    }
    
    const handleOverDrop = (e: DragEvent) => {
        const currentElement = (e.target as HTMLElement);
        e.preventDefault(); 
        
        if (e.type != "drop") {
            return; 
        }
        
        const draggedId = e.dataTransfer.getData("text");
        const draggedEl = document.getElementById(draggedId);
        
        if (draggedEl.parentNode == e.target) {
            currentElement.className = '';
            return;
        }
        
        draggedEl.parentNode.removeChild(draggedEl);
        currentElement.appendChild(draggedEl); 
        currentElement.className = '';
    }
    
    const draggable = document.querySelectorAll('[draggable]');
    const targets = document.querySelectorAll('[data-drop-target]');
    
    for (let i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", handleDragStart);
    }

    for (let i = 0; i < targets.length; i++) {
        targets[i].addEventListener("dragover", handleOverDrop);
        targets[i].addEventListener("drop", handleOverDrop);
        targets[i].addEventListener("dragenter", handleDragEnterLeave);
        targets[i].addEventListener("dragleave", handleDragEnterLeave);
    }
}