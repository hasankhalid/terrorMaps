var format = d3.format(",d");

// function for one time transition of a selction of text
function opac_text_transit(selection, transition_time, transition_value){

  var parent = d3.select(document.querySelector(selection).parentNode)

  var init_transition = d3.select(selection)
            .transition()
            .duration(transition_time)
            .style("opacity", 0)
            .remove()

  parent.append(selection)
      .text(format(transition_value))
      .style("opacity", 0)
      .transition(init_transition)
      .style("opacity", 1);
}

function interp_text_transit(selection, transition_time, transition_value){
  d3.select(selection)
    .transition()
    .duration(transition_time)
    .tween("text", function() {
      var that = d3.select(this),
          i = d3.interpolateNumber(that.text().replace(/,/g, ""), transition_value);
      return function(t) { that.text(format(i(t))); };
      })
}
