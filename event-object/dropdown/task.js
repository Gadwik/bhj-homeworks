const dropdownValue = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');

dropdownValue.addEventListener('click', function(){ 
if (list.className === 'dropdown__list') { 
  list.className = 'dropdown__list dropdown__list_active'; 
} else { list.className = 'dropdown__list'; 
       }
});	
function rename(event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
		list.className = 'dropdown__list';
}

for (const link of links) {
    link.addEventListener('click', rename);
}