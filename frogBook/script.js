const pages = document.querySelectorAll(".page");
let current = 0; 

pages.forEach((page, index) => {
    const originalZIndex = pages.length - index; 
    page.setAttribute('data-original-zindex', originalZIndex); 
    page.style.zIndex = originalZIndex;
});

pages.forEach((page, index) => {
    page.addEventListener("click", (e) => {
        const rect = page.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        
        const originalZIndex = parseInt(page.getAttribute('data-original-zindex'));
        
        const maxZIndex = pages.length * 2; 

        // ---  Virar Página (Próxima) ---
        if (clickX > rect.width / 2 && index === current && current < pages.length - 1) {
            
            page.style.zIndex = maxZIndex; 
            
            // 2. Vira
            page.classList.add("flipped");
    
            setTimeout(() => {
                page.style.zIndex = index + 1; 
            }, 50); 
            
            // 4. Avança
            current++; 
        }

        // ---  Voltar Página  ---
        else if (clickX < rect.width / 2 && index === current - 1) {
            page.style.zIndex = maxZIndex; 
            page.classList.remove("flipped");
            current--; 
            setTimeout(() => {
                page.style.zIndex = originalZIndex;
                
            }, 800);
        }
    });
});