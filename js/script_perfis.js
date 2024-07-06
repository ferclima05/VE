document.addEventListener('DOMContentLoaded', function() {

    let mestre = localStorage.getItem('mestre') ? JSON.parse(localStorage.getItem('mestre')) : {};

    console.log(mestre);

});