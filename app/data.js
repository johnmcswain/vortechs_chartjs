let MAXIMUM = 90;
let randomNum = function(max){
  return Math.floor((Math.random() * max) + 1);
}

let randomData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Vortechs Dataset #1",
            backgroundColor: "rgba(220,220,220,0.2)",
            borderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            data: [randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM)]
        },
        {
            label: "Vortechs Dataset #2",
            backgroundColor: "rgba(151,0,0,0.2)",
            borderColor: "rgba(151,0,0,1)",
            pointBackgroundColor: "rgba(151,0,0,1)",
            pointHoverBackgroundColor: "rgba(151,0,0,1)",
            pointHighlightFill: "rgba(151,0,0,1)",
            pointHoverBorderColor: "rgba(151,0,0,1)",
            data: [randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM), randomNum(MAXIMUM)]
        }
    ]
};