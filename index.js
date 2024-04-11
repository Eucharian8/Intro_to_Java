
const btn = document.querySelector('#btn');
const colorHistoryDiv = document.getElementById('colorHistory');

const colors = ['#00FF00', '#FF0000', '#FF00FF', 
'#008000', '#0000FF', '#800000', 
'#FFFFF0', '#808080', '#C0C0C0', 
'#FFA500', '#800080', '#000080']

function bgC(){
    const colorIndex = Math.floor(Math.random()* colors.length);
    return colors[colorIndex];
    } 

    btn.addEventListener('click', () => {
        let bgColor = bgC();
        document.body.style.backgroundColor = bgColor;



let colorHistory = document.createElement('div');
    colorHistory.style.backgroundColor = bgColor;
    colorHistory.classList.add('colorHistory');
    colorHistory.textContent = bgColor;
    colorHistoryDiv.prepend(colorHistory);

    colorHistory.innerHTML = '';
})