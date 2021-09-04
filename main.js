var SpeechRecognition=window.webkitSpeechRecognition;
var SR= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    SR.start();
}
    SR.onresult=function (event)
    {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
        document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie")
    {
        speak();  
    }
    }

var cam=document.getElementById("camera");
function speak()
{
    var voice=window.speechSynthesis;
    voice_value="taking your selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(voice_value);
    voice.speak(utter);
    Webcam.attach(cam);

    setTimeout(function(){

        take_selfie();
        save();

    },5000);
    
}


Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})

function take_selfie()
{
    console.log("taking selfie");
Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML="<img id='result_img' src='"+data_uri+"'/>";
});
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("result_img").src;
    link.href=image;
    link.click();
}