var modal = document.getElementById("modal");
var modalHead = document.getElementById("modalHead");
var btnClose = document.getElementById("btnClose");

var isDragging = false;
var startX;
var threshold = 150; // Ajuste o valor do limiar conforme necessário



function startDragging(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
}

function closeModal() {
    modal.style.left = "100%"
}
        
function dragging(e) {
    modal.style.transition = "none";
    
    if (isDragging) {
        var deltaY = (e.clientY || e.touches[0].clientY) - startY; // Change deltaX to deltaY
        
        modal.style.transition = "none";
        modal.style.top = Math.max(0, deltaY) + "px"; // Change left to top
    }
}


function stopDragging(e) {
    if (isDragging) {
        isDragging = false;
        var deltaX = Math.abs((e.clientX || e.changedTouches[0].clientX) - startX);
        
        modal.style.transition = "all 0.5s";
        if (deltaX >= threshold) {
            closeModal()
        } else {
            modal.style.left = "0";
        }
    }
}

modal.addEventListener("mousedown", startDragging);
modal.addEventListener("mousemove", dragging);
modal.addEventListener("mouseup",   stopDragging);

modal.addEventListener("touchstart", startDragging);
modal.addEventListener("touchmove",  dragging);
modal.addEventListener("touchend",   stopDragging);

btnClose.addEventListener("click", () => closeModal());