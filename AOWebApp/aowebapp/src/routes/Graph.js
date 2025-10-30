import { useEffect, useState } from "react";
import * as d3 from "d3";

export default function Graph() {
    const [rngNumber, setRngNumber] = useState(0);
    const [rngArray, setRngArray] = useState([]);
    const maxItems = 20;
    const timeOut = 500;
    const maxValue = 60;

    useEffect(() => {
        const interval = setInterval(() => {
            setRngNumber(Math.floor(Math.random() * maxValue));
        }, timeOut)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        let tempArray = [...rngArray, rngNumber];
        if (tempArray.length > maxItems) { tempArray.shift() }
        setRngArray(tempArray);
    }, [rngNumber])

    useEffect(() => {
        const svg = d3.select('svg');
        svg.selectAll("*").remove();

        let w = svg.node().getBoundingClientRect().width
        w = w - 40
        let h = svg.node().getBoundingClientRect().height
        h = h - 25
        const barMargin = 10;
        const barWidth = w / rngArray.length

        let yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([h, 0]);

        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', 'translate(30,3)')

        let barGroups = chartGroup.selectAll('g')
            .data(rngArray)

        //let newBarGroups = barGroups.enter()
        //    .append('g')
        //    .attr('transform', (d, i) => {
        //        return `translate(${i * barWidth}, ${yScale(d)})`
        //    });

        //newBarGroups
        //    .append('rect')
        //    .attr('x', 0)
        //    .attr('height', d => { return h - yScale(d) })
        //    .attr('width', barWidth - barMargin)
        //    .attr('fill', (d, i) => `rgb(${(360 / maxValue * d + 1)}, ${360 - (360 / maxValue * d + 1)}, 60`);
        const colourScale = d3.scaleSequential(d3.interpolateRgb('Lime', 'Red'))
            .domain([0, maxValue]);

        chartGroup
            .append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", yScale(0))
            .attr("x2", 0)
            .attr("y2", yScale(maxValue))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "green" },
                { offset: "100%", color: "red" }
            ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset })
            .attr("stop-color", function (d) { return d.color });


        chartGroup
            .append('path')
            .datum(rngArray)
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)')
            .attr('d', d3.line()
                .x((d, i) => i * barWidth)
                .y((d) => yScale(d))
            )
        

        let yAxis = d3.axisLeft(yScale);
        chartGroup.append('g')
            .classed('axis y', true)
            .call(yAxis);

    }, [rngArray]);

    return (
        <div className="App container">
            <h1>RNG Output: {rngNumber}</h1>
            <div className="row">
                <svg width="100%" height="600px" className="border border-primary rounded p-2"></svg>
            </div>
        </div>
    )
}