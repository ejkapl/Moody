function openPanel(){
  setTimeout(function() {$('#panel').animate({height: "18em"}, "slow")} , 1000);
}

function closePanel(){
  $('#panel').animate({height: "18em"}, "slow").delay(500).animate({height: "0em"}, "slow");
}

function drawChart(){
  var chart5 = new AwesomeChart('chartCanvas5');
  chart5.chartType = "pie";
  //chart5.title = "Worldwide browser market share: December 2010";
  chart5.data = [51.62,31.3,10.06,4.27,1.96,0.78];
  chart5.labels = ['IE','Firefox','Chrome','Safari','Opera','Other'];
  chart5.colors = ['#006CFF', '#FF6600', '#34A038', '#945D59', '#93BBF4', '#F493B8'];
  chart5.draw();
}