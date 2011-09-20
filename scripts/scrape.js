var ul = document.getElementsByTagName( "div" );
var arr;
var para = null;


function getGMailText() {
	arr = getElementsByClassName(document, "body", "editable LW-yrriRe");
    //alert(arr.length);
	if(arr.length < 1) return '';
	var text = arr[0].textContent;
	return text;
}


function getGDocText() {
	arr = getElementsByClassName(document, "div", "kix-lineview-content");
   //alert(arr.length);

	var text = '';
	for(var j = 0; j < arr.length; j++)
	{
		elems = arr[j].getElementsByTagName("span");
		for(var i = 0; i < elems.length; i++)
		{
			elem = elems[i];
			if(elem.className == '') {
				text = text + elem.textContent + '\n';
			}
			
		}
	}
  
  /*spans = document.getElementsByTagName("span");
  for(var i = 0; i < spans.length; i++)
		{
			span = spans[i];
			if(span.className == '') {
				text = text + span.textContent + '\n';
			}
			
		}
    */
	return text;
}

function getElementsByClassName(doc, strTagName, strClassName){

	var arrElements = (strTagName == "*" && document.all)? document.all : doc.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
    //alert("First:"+arrElements.length);
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];
    //alert(oElement.className);
		if(oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}
	}
	return (arrReturnElements)
}