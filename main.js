function classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/M3JPJa_KI/model.json");
}

function modelReady(){
    classifier.classify(gotResults);
}
    
function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
}
}