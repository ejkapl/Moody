//var $j = jQuery.noConflict();

var hash = window.location.hash;
//alert(hash);

function injectHtml(element, html){
  alert('BOOM. Alert.');
  $(element).prepend(html);
}
function outjectHtml(id){
  $(id).remove();
}

// Bind an event to window.onhashchange that, when the hash changes, gets the
// hash and adds the class "selected" to any matching nav link.
$(window).hashchange(function(){
  var hash = location.hash;
  
  if(hash.indexOf("#compose") > -1){
    injectHtml('body', '<div id="injectedViaJS">We could also use insertBefore instead of appendChild, or even manually add the new element to the end of the end of the childNodes collection. Using replaceChild, we could also overwrite existing nodes. It is also possible to copy a node using cloneNode(true). This returns a copy of the node but does not automatically add it into the childNodes collection. Using element.removeChild(referenceToChildNode), we can remove existing nodes.</div>');
  } else{
    outjectHtml("#injectedViaJS");
  }
  // Iterate over all nav links, setting the "selected" class as-appropriate.
})

// Since the event is only triggered when the hash changes, we need to trigger
// the event now, to handle the hash the page may have loaded with.
$(window).hashchange();