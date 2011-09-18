//var $j = jQuery.noConflict();


// Bind an event to window.onhashchange that, when the hash changes, gets the
// hash and adds the class "selected" to any matching nav link.
$(window).hashchange(createPanel);
$(document).ready(createPanel);
// Since the event is only triggered when the hash changes, we need to trigger
// the event now, to handle the hash the page may have loaded with.
$(window).hashchange();





function injectHtml(element, html){
  $(element).prepend(html);
}
function outjectHtml(id){
  $(id).remove();
}
//INTEGRATION
function createPanel(chart_data){
  var hash = window.location.hash;
  
  if(hash.indexOf("#compose") > -1 || hash.indexOf("#drafts/") > -1 || window.location.href.indexOf('docs.google.com/document/') > -1){
  
    
    var textToAnalyze = '';
    var panelId = '';
    
    //Google Docs
    if(window.location.href.indexOf('docs.google.com/document/') > -1){
      textToAnalyze = getGDocText();
      panelId = 'panel_gdocs';
    }
    //Gmail email creation
    else if(hash.indexOf("#compose") > -1 || hash.indexOf("#drafts/") > -1){
      textToAnalyze = '';
      panelId = 'panel_gmail';
    }
    
    
    outjectHtml('#panel_gdocs');
    outjectHtml('#panel_gmail');
    
    injectHtml('body',
    '<div id="'+panelId+'" class="panel panel_piece">' +
    '<canvas id="chartCanvas" class="panel_piece" width="300%" height="300%">Your web-browser does not support the HTML 5 canvas element.</canvas>' +
    '<div id="close_panel" class="panel_piece" onclick="var element=document.getElementById(\''+panelId+'\'); element.parentNode.removeChild(element);"></div>' +
    '</div>');
    
    
    
    var chartData = getEmotionData(textToAnalyze);
  
    drawChart(chartData);
    openPanel();
  } else{
    //closePanel();
    outjectHtml('#panel_gdocs');
    outjectHtml('#panel_gmail');
  }
}

function openPanel(){
  setTimeout(function() {$('#panel_gmail').animate({height: "300px"}, "slow")} , 500);
  setTimeout(function() {$('#panel_gdocs').animate({width: "300px"}, "slow")} , 500);
}
/*
function closePanel(){
  $('.panel').animate({height: "18em"}, "slow").delay(500).animate({height: "0em"}, "slow");
}
*/
function drawChart(dataLabelDict){
  var chart = new AwesomeChart('chartCanvas');
  chart.chartType = "pie";
  //chart.title = "Worldwide browser market share: December 2010";
  chart.data = [];
  chart.labels = [];
  for(var emotion in dataLabelDict){
    alert('label: '+emotion+' | number: '+dataLabelDict[emotion]);
    if(dataLabelDict[emotion] != 0){
      chart.labels.push(emotion);
      chart.data.push(dataLabelDict[emotion]);
    }
  }
  chart.colors = ['#006CFF', '#FF6600', '#34A038', '#945D59', '#93BBF4', '#F493B8'];
  chart.draw();
}