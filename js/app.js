/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var taylor = document.getElementById("name1");
taylor.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var dj = document.getElementById("position2");
dj.innerHTML = "DJ Khaled";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var piko = document.getElementById("alias3");
piko.innerHTML = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var prince = document.getElementsByClassName("profile");
prince[0].innerHTML = "Purple Rain";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var bruceLee = document.getElementsByClassName("profile");
bruceLee[1].innerHTML = "Be like water my friend";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var samuelJackson = document.getElementsByClassName("alias");
samuelJackson[2].innerHTML = "badAssMotherFucker";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var peterGriffin = document.createElement("div");
peterGriffin.id = "name7";
peterGriffin.innerHTML = "Peter Griffin";
nameParent.appendChild(peterGriffin);

/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var timDuncan = document.createElement("div");
timDuncan.id = "alias8";
timDuncan.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(timDuncan);


//Final Boss
/*9. Create your own profile.*/
var tanji = document.createElement("div");
tanji.id = "alias11";
tanji.innerHTML = "le tamjid the legend";
mumble.appendChild(tanji);
