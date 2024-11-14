let currentPage = 1;
const pages = document.querySelectorAll('.news-page');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const page1Button = document.querySelector('.page-1-btn');
const page2Button = document.querySelector('.page-2-btn');

function changePage(direction) {

    pages[currentPage - 1].style.display = 'none';

    currentPage += direction;

    if (currentPage > pages.length) {
        currentPage = 1;
    } else if (currentPage < 1) {
        currentPage = pages.length;
    }

    pages[currentPage - 1].style.display = 'block';

    updateActiveButton();

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === pages.length;
}

function goToPage(pageNumber) {

    pages[currentPage - 1].style.display = 'none';

    currentPage = pageNumber;

    pages[currentPage - 1].style.display = 'block';

    updateActiveButton();

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === pages.length;
}

function updateActiveButton() {

    page1Button.classList.remove('active');
    page2Button.classList.remove('active');

    if (currentPage === 1) {
        page1Button.classList.add('active');
    } else if (currentPage === 2) {
        page2Button.classList.add('active');
    }
}

pages[0].style.display = 'block';
updateActiveButton();