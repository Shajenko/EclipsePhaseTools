// JavaScript Document
	

var charList = [{ name: "Bob", baseInit: 0, initRoll: 0, fullInit: 0 },
				 { name: "Sue", baseInit: 0, initRoll: 0, fullInit: 0 },
				 { name: "Jim", baseInit: 0, initRoll: 0, fullInit: 0 }];

function initialize()
{
	"use strict";
}

function defaultToolFunc(tName)
{
    if(tName == "Initiative")
    {
        writeCharacters();
        return;
    }
}


function openTool(evt, toolName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(toolName).style.display = "block";
    evt.currentTarget.className += " active";

    // Run the default function for the tool
    defaultToolFunc(toolName);
}




function writeCharacters() {
    var outputString = "";

    outputString += "<table width=\"100%\">"

    for (i = 0; i < charList.length; i++) {
        outputString += "<tr>";
        outputString += "<td>" + charList[i].name + "</td>";
        //outputString += "<td>" + "<button name=\"" + buildList[i].name + "Build\" onclick=\"BuildClick(" + buildList[i].name + ")\">Build</button>" + "</td>";
        outputString += "</tr>";
    }
    outputString += "</table>";
    document.getElementById("CharacterList").innerHTML = outputString;
}