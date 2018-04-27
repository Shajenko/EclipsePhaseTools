// JavaScript Document

// function for downloading content to the client's computer
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function loadFile()
{
	"use strict";
	var fileList = this.files;
	var file = fileList[0];
	var reader = new FileReader();
	var result;
	alert("Type: " + file.type);
	if(fileList.length === 0)
	{
		alert("No files included");
		return 0;
	}
	reader.readAsText(file);
	return reader;
	    // The file's text will be printed here
	    //console.log(event.target.result);
		//alert("Text of file: " + event.target.result);
}