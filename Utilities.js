// JavaScript Document

// function for downloading content to the client's computer
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function loadFile(element)
{
	"use strict";
	var fileList = element.files;
	var file = fileList[0];
	var reader = new FileReader();
	//alert("Type: " + file.type);
	if(fileList.length === 0)
	{
		alert("No files included");
		return 0;
	}
	reader.readAsText(file);
	return reader;
}


function randomD10()
{
	return Math.floor(Math.random() * (10)) + 1;
}

function serialize(objToSerialize)
{
	myObj = JSON.stringify(objToSerialize);
	return myObj;
}

function deserialize(objToDeserialize)
{
	myObj = JSON.parse(objToDeserialize);
	return myObj;
}

const defaultComparator = (a, b) => {
	if (a < b) {
	  return -1;
	}
	if (a > b) {
	  return 1;
	}
	return 0;
  };

const quickSort = (
	unsortedArray,
	comparator = defaultComparator
  ) => {
  
	// Create a sortable array to return.
	const sortedArray = [ ...unsortedArray ];
  
	// Recursively sort sub-arrays.
	const recursiveSort = (start, end) => {
  
	  // If this sub-array is empty, it's sorted.
	  if (end - start < 1) {
		return;
	  }
  
	  const pivotValue = sortedArray[end];
	  let splitIndex = start;
	  for (let i = start; i < end; i++) {
		const sort = comparator(sortedArray[i], pivotValue);
  
		// This value is less than the pivot value.
		if (sort === -1) {
  
		  // If the element just to the right of the split index,
		  //   isn't this element, swap them.
		  if (splitIndex !== i) {
			const temp = sortedArray[splitIndex];
			sortedArray[splitIndex] = sortedArray[i];
			sortedArray[i] = temp;
		  }
  
		  // Move the split index to the right by one,
		  //   denoting an increase in the less-than sub-array size.
		  splitIndex++;
		}
  
		// Leave values that are greater than or equal to
		//   the pivot value where they are.
	  }
  
	  // Move the pivot value to between the split.
	  sortedArray[end] = sortedArray[splitIndex];
	  sortedArray[splitIndex] = pivotValue;
  
	  // Recursively sort the less-than and greater-than arrays.
	  recursiveSort(start, splitIndex - 1);
	  recursiveSort(splitIndex + 1, end);
	};
  
	// Sort the entire array.
	recursiveSort(0, unsortedArray.length - 1);
	return sortedArray;
  };