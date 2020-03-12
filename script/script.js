function showHideSearchForm() {
    let search = document.getElementById('icon-search');

    search.addEventListener('click', function(event) {
        let input = document.createElement('input');
        input.classList.add('input-search');
        input.appendChild();
    })
} 

showHideSearchForm();


// function showHideSearchInput () {
//     $('#icon-search').on('click', function (){
//       $('#input-search').toggle('slow')
//     });
    
//     $('#input-search').keyup(function(event){
//       if(event.keyCode == 13) {
//         $(this).css({'display':'none', 'transition':'.5s'})  /*убрать инлайновые стили, заменить на классы*/
//       };
//     });
//   };
//   showHideSearchInput();


//   <input type="search" name="text">
