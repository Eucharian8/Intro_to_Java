
const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const colorHistory = document.getElementById('color-history');
const colors = ['blue', 'green', 'blueviolet', 'darkorange', 'red','black', 'purple'];

body.style.backgroundColor = 'blue';
//updateColorHistory();

btn.addEventListener('click', function(){
    const colorIndex = parseInt(Math.random()* colors.length);
    body.style.backgroundColor = colors[colorIndex];
})

updateColorHistory();

function updateColorHistory() {
    colorHistory.innerHTML = '';
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.style.marginTop = '20px';
        colorDiv.style.width = '50px';
        colorDiv.style.height = '50px';
        colorDiv.style.display = 'inline-block';
        colorDiv.style.marginRight = '5px';
        colorHistory.appendChild(colorDiv);
    });
}