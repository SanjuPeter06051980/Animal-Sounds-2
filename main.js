function identify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/J4ucAgYL0/" ,ModelReady);
}

function ModelReady(){
    classifier.classify(gotResults);
}