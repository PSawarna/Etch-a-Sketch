const clear = document.querySelector('#clear');

for(let i = 0; i < 16; i++) {
    for(let j = 0; j< 16; j++) {
        let div = document.createElement("div");
        div.style.width = "40px";
        div.style.height = "40px";
        document.getElementById("container").appendChild(div);
        clear.addEventListener('click', (e) => {
            div.style.backgroundColor = 'white';
        });
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
        });
    }
}


    
        