x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Sytem is listening, please speak.";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Your speech has been recognised as " + content;

    if (content == "circle") {
        draw_circle = "set";
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById("status").innerHTML = "Started drawing circle";
    }

    if (content == "rectangle") {
        draw_rectangle = "set";
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById("status").innerHTML = "Startet drawing rectangle";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if ( draw_circle == "set") {
        radius = Math.floor(Math.random() * 150);

        circle(x, y, radius);
        draw_circle = "";

        document.getElementById("status").innerHTML = "The circle is drawn";
    }

    if ( draw_rectangle == "set") {
        width = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 100);

        rect(x, y, width, height);
        draw_rectangle = "";

        document.getElementById("status").innerHTML = "The rectangle is drawn";
    }
}