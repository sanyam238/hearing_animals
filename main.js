function classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/M3JPJa_KI/model.json");
}

function modelReady(){
    classifier.classify(gotResults);
}
    dog=0;
    cat=0;
    cow=0;
    lion=0;
background=0;

function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);

        random_r = Math.floor(Math.random()*255)+1;
        random_g = Math.floor(Math.random()*255)+1;
        random_b = Math.floor(Math.random()*255)+1;
        document.getElementById("heading_accuracy").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
        
}
}