const targetEl = document.querySelector('span');

const setOnline = () =>{
    targetEl.innerText = 'Online';
    targetEl.style.color = 'green'
}
const setOffline = () =>{
    targetEl.innerText = 'Offline';
    targetEl.style.color = 'red'
}

window.navigator.onLine ? setOnline() : setOffline() 

window.addEventListener('online', setOnline)
window.addEventListener('offline', setOffline)
