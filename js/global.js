console.log('yes');
document.getElementById('burger').addEventListener('click', Disparo)

function Disparo() {
    document.getElementById('menu-list').classList.toggle('hide');
}