// global variables
var sentanceButton = document.getElementById("sentanceButton");
var madLibButton = document.getElementById("madLibButton");
madLibButton.disabled = true;
var sentanceElement = document.getElementById("sentance");
var responceContainer = document.getElementById("responceContainer");
var sentance = [];
var outputString = "";

// function declarations

function sentanceManip()
{	
	var s = sentanceElement.value;
	if(sentance.length <= 1){
		sentance.push(s);
		sentanceElement.value = "";
		sentanceElement.setAttribute("placeholder", "enter verb");
		sentanceElement.focus();
	} else if(sentance.length >= 2 && sentance.length < 5){
		s = sentanceElement.value;
		sentance.push(s);
		sentanceElement.value = "";
		sentanceElement.setAttribute("placeholder", "enter noun");
		sentanceElement.focus();
	} else if(sentance.length >=5  && sentance.length < 8){
		s = sentanceElement.value;
		sentance.push(s);
		sentanceElement.value = "";
		sentanceElement.setAttribute("placeholder", "enter adjective");
		sentanceElement.focus();
	} else if(sentance.length == 8){
		s = sentanceElement.value;
		sentance.push(s);
		sentanceElement.value = "";
		sentanceElement.setAttribute("placeholder", "enter adjective");
		sentanceElement.focus();
		sentanceElement.value = "";
		sentanceElement.setAttribute("placeholder", "all words entered");
		seeMadLib();
	}
} // end FUNCTION sentanceManip

function seeMadLib()
{
	outputString = "<p>";
	for(var i=0; i<sentance.length; i++){
	outputString += sentance[i] + ", ";
	}
	outputString + "</p>";
	responceContainer.innerHTML = outputString;
	madLibButton.disabled = false;
}

function showCreation()
{
	for (var i=0; i<9; i++){
		this["word" + i] = document.getElementById("word" + i);
		this["word" + i].innerHTML = sentance[i];
	} // end FOR
} // end FUNCTION showCreation
function eventListeners()
{
	if(sentanceButton.addEventListener)
	{ sentanceButton.addEventListener("click", sentanceManip, false); }

	
	if(madLibButton.addEventListener)
	{ madLibButton.addEventListener("click", showCreation, false); }
} // end FUCNTION eventListeners

function init()
{
	eventListeners();
} // end FUNCTION init

// XBCEL
if(window.addEventListener)
{ window.addEventListener("load", init, false); }

