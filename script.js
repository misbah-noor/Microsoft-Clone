// Navbar

const navclose = document.getElementById('nav-close');
function toggleMenu(){
    navclose.classList.toggle('hidden');
}

// Search Modal
const searchModal = document.getElementById('searchmodal');
const searchbuttons = document.querySelectorAll('.searchbtn');
const closeSearch = document.getElementById('closesearch');


searchbuttons.forEach((button) => {
    button.addEventListener('click', () => {
        searchModal.classList.remove('hidden'); 
    });
});

closeSearch.addEventListener('click', () =>{
    searchModal.classList.add('hidden');
});