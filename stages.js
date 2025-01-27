const stages = document.querySelector('.stages ol');
const pagination = document.querySelector('.pagination');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let translateValue = 0;
let currentPage = 1;

const setPageCount = () => {
    const lastWidth = stages.clientWidth;
    const pages = Math.round(stages.scrollWidth / (lastWidth + 20));

    pagination.innerHTML = '';

    for (let p = 0; p < pages; p++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        pagination.append(dot);    
    }

    return pages;
}

let pages = setPageCount();

const updatePagination = () => { 
    btnPrev.classList.toggle('inactive', currentPage === 1);
    btnNext.classList.toggle('inactive', currentPage === pages);

    const dots = pagination.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage - 1);
    });
}

btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        translateValue -= stages.clientWidth + 20;
        stages.style.transform = `translateX(-${translateValue}px)`; 
        updatePagination();
    }
});

btnNext.addEventListener('click', () => {
    if (currentPage < pages) {
        currentPage++;
        translateValue += stages.clientWidth + 20;
        stages.style.transform = `translateX(-${translateValue}px)`; 
        updatePagination();
    }
});

updatePagination();