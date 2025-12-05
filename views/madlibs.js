
const texts = [
    document.getElementById("in_text0"),
    document.getElementById("in_text1"),
    document.getElementById("in_text2"),
    document.getElementById("in_text3"),
    document.getElementById("in_text4"),
]

const TEXT_COUNT = 5;

const output = document.getElementById("pgph1");

const set_btn = document.getElementById("set_btn");
const reset_btn = document.getElementById("reset_btn");

set_btn.addEventListener("click", () => {
    console.log("btn clicked");
    
    let flag = 1;
    
    for (let i = 0; i < TEXT_COUNT; i++) {
        if (texts[i].value === "") {
            flag = 0;
        }
    }
    
    if (flag === 1) {
    
    output.textContent = "The quick brown fox " + texts[0].value + 
        " over the fence. He then ate a " + texts[1].value + 
        " as all foxes do. After a hearty meal, the fox felt " + texts[2].value +
        ", so he decided to run to the " + texts[3].value + ". It" +
        " was there, that he found " + texts[4].value + " and all was well in the " +
        "universe.";  
    }   
});

reset_btn.addEventListener("click", () => {
    output.textContent = "Enter verbage.";
    for (let i = 0; i < TEXT_COUNT; i++) {
        texts[i].value = "";
    }
});

