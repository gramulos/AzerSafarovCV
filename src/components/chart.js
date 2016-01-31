'use strict';

var React = require("react");
var DoughnutChart = require("react-chartjs").Doughnut;

var MyComponent = React.createClass({
    render: function() {
        var chartData = [
            {
                value: 30,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "C#"
            },
            {
                value: 70,
                color: "#2196f3",
                highlight: "#57D3D1",
                label: "HTML/CSS"
            },
            {
                value: 30,
                color: "#9c35e0",
                highlight: "#bb62f7",
                label: "TDD"
            },
            {
                value: 90,
                color: "#1EBF6E",
                highlight: "#5AD3D1",
                label: "React.js"
            },
            {
                value: 30,
                color: "#bc237f",
                highlight: "#ce3b93",
                label: "Angular.js"
            },
            {
                value: 80,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Git"
            }
        ];

        return <DoughnutChart data={chartData} className="cv-chart"/>
    }
});

module.exports = MyComponent;