var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#text-input');
var output = document.querySelector('#output-text');

var serverURL ="https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input)
{
    return serverURL + "?" +"text=" + input //input
}

function errorHandler(error)
{
    console.log("error occured", error);
    alert("Something went wrong with server! Try again after some time.")
}

function clickHandler()
{
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))  //processing
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        output.innerText = translatedText; //output
    }).catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)