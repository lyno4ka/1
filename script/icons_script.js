const search = document.getElementById('icon-search');

function showHideSearchInput(event) {
    
    const targetElement = event.target;
    
    let inputElement = document.createElement('input');
    inputElement.type = 'search';
    inputElement.name = "text";
    inputElement.size = "35";
    inputElement.value= 'What do you want to search?';
    inputElement.classList.add('input-search');
    targetElement.parentNode.appendChild(inputElement);
    inputElement.select();

    inputElement.addEventListener('blur', function(event) {
    inputElement.parentNode.appendChild(targetElement);
    inputElement.remove();
    });

    inputElement.addEventListener('keyup', function(event) {
        switch (event.which) {
            case 13: 
                inputElement.blur();
                break;
            case 27:
                inputElement.blur();
                break;
    }    
    }); 
}

search.addEventListener('click', showHideSearchInput);