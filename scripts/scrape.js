var ul = document.getElementsByTagName( "div" );
var arr;
var para = null;


function getGMailText() {
	arr = getElementsByClassName(document, "body", "editable LW-yrriRe");
  alert(arr.length);
	if(arr.length < 1) return '';
	var text = arr[0].textContent;
	return text;
}


function getGDocText() {
	arr = getElementsByClassName(document, "div", "kix-lineview-content");

	var text = '';
	for(var j = 0; j < arr.length; j++)
	{
		elems = arr[j].getElementsByTagName("span");
		for(var i = 0; i < elems.length; i++)
		{
			elem = elems[i];
			if(elem.className == '') {
			//alert("help");
				text = text + elem.textContent + '\n';
			}
			
		}
	}
	return text;
}

function getElementsByClassName(doc, strTagName, strClassName){

	var arrElements = (strTagName == "*" && document.all)? document.all : doc.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];
		if(oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}
	}
	return (arrReturnElements)
}