var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx, {
    type: 'radar', 
    data:randomData,
    options:options
});
