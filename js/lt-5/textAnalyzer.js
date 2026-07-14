function aText() {
    let text = document.getElementById('text');
    text = text.value;

    let result = document.getElementById("result");

    if (text.trim() == "") {
        result.innerHTML = "Pleae write something";
        return;
    }

    let char = text.length;
    let word = text.trim().split(/\s+/).length;
    console.log(word);
    let rev = text.split("").reverse().join("");
    console.log(rev);

    let row = document.createElement("tr");
    row.innerHTML = `
        <h2>Analyzed Texts</h2>
        <p>Total Character : ${char}</p>
        <p>Total Word : ${word}</p>
        <p>Reverse text : ${rev}</p>
    
    `;
    result.appendChild(row);
    text.innerText = " ";
}