let images =[
    "images/1.JPG",
    "images/2.JPG",
    "images/3.JPG",
];

let i = 0;

function showImg(){
    document.getElementById("slider").src = images[i];
}

function nextImg(){
    i++;
    if(i>=images.length){
        i=0;
    }
    showImg();
}

function prevImg(){
    i--;
    if(i<0){
        i = images.length-1;
    }
    showImg();
}

setInterval(nextImg,3000)
