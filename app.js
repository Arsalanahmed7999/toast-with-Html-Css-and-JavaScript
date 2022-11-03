let timer = document.querySelector('.time');
let closeBtn = document.querySelector('.close');
let toast = document.querySelector('.toast');
let months = ['Janaury', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', "October", 'November', 'Decemeber']
let today = new Date();
let day = today.getDate();
timer.innerHTML = day + " " + months[today.getMonth()];

closeBtn.addEventListener('click', ()=>{
    toast.classList.add('visibilityHidden')
})

