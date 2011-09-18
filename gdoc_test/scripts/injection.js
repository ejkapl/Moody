//var $j = jQuery.noConflict();

var hash = window.location.hash;
//alert(hash);

function injectHtml(element, html){
  $(element).prepend(html);
}
function outjectHtml(id){
  $(id).remove();
}

// Bind an event to window.onhashchange that, when the hash changes, gets the
// hash and adds the class "selected" to any matching nav link.
$(window).hashchange(function(){
  var hash = location.hash;
  
  if(hash.indexOf("#compose") > -1 || hash.indexOf("#drafts/") > -1){
    outjectHtml("#panel");
    injectHtml('body', '<div id="panel"><!-- you can put content here --></div>');
    $('head').append('<script>$("body").load(function() {$("#panel").slideDown("slow");});</script>');
  }else{
    outjectHtml("#panel");
  }
  // Iterate over all nav links, setting the "selected" class as-appropriate.
})

// Since the event is only triggered when the hash changes, we need to trigger
// the event now, to handle the hash the page may have loaded with.
$(window).hashchange();