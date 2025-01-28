(() => {

const members = document.querySelector('.members ul');
const page = document.querySelector('.members .pagination span');
const btnPrev = document.querySelector('.members .btn-prev');
const btnNext = document.querySelector('.members .btn-next');

const getParams = () => {
    if (window.innerWidth > 1280) {
        return {
            'memberWidth': 0.322,
            'firstPage': 3,
        };
    }
    else if (window.innerWidth > 768) {
        return {
            'memberWidth': 0.5,
            'firstPage': 2,
        };
    }
    else {
        return {
            'memberWidth': 1,
            'firstPage': 1,
        };
    }
}

let translateValue = 0;
let currentPage = getParams().firstPage;

const updatePagination = () => {
    page.textContent = currentPage;
}

const toNextPage = () => {
    if (currentPage === 6) {
        currentPage = getParams().firstPage;
        translateValue = 0;
    }
    else {
        currentPage++;
        translateValue += members.clientWidth * getParams().memberWidth + 20;
    }
    members.style.transform = `translateX(-${translateValue}px)`;
    updatePagination();
}

btnPrev.addEventListener('click', () => {
    if (currentPage === getParams().firstPage) {
        currentPage = 6;
        translateValue = (6 * (members.clientWidth * getParams().memberWidth + 20)) - members.clientWidth;
    }
    else {
        currentPage--;
        translateValue -= members.clientWidth * getParams().memberWidth + 20; 
    }
    members.style.transform = `translateX(-${translateValue}px)`; 
    updatePagination();
});

btnNext.addEventListener('click', toNextPage);
// setInterval(toNextPage, 4000);

updatePagination();

})();