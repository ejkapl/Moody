//var $j = jQuery.noConflict();


// Bind an event to window.onhashchange that, when the hash changes, gets the
// hash and adds the class "selected" to any matching nav link.
$(window).hashchange(createPanel);

// Since the event is only triggered when the hash changes, we need to trigger
// the event now, to handle the hash the page may have loaded with.
$(window).hashchange();


function injectHtml(element, html){
  $(element).prepend(html);
}
function outjectHtml(id){
  $(id).remove();
}
function createPanel(){
  var hash = window.location.hash;
  
  if(hash.indexOf("#compose") > -1 || hash.indexOf("#drafts/") > -1){
    outjectHtml("#panel");
    //injectHtml('head',
    //'<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>');
    //injectHtml('body',
    //'<script> var $j = jQuery.noConflict(); alert(\"THIS IS WORKING\")"</script>');
    injectHtml('body',
    '<div id="panel">' +
    '<canvas id="chartCanvas5" width="300%" height="300%">Your web-browser does not support the HTML 5 canvas element.</canvas>' +
    '<div id="close_panel" onclick="var element=document.getElementById(\'panel\'); element.parentNode.removeChild(element);">CLICK ME!</div>' +
    '</div>');
    drawChart();
    openPanel();
  } else{
    //closePanel();
    outjectHtml("#panel");
  }
  // Iterate over all nav links, setting the "selected" class as-appropriate.
}