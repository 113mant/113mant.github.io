import * as d3 from 'd3';

export default function ScatterPlot({ width, height, data, xKey, yKey }) {
    
    const margin = { top: 10, right: 10, bottom: 20, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    
    const xScale = d3
        .scaleLinear()
        .domain(d3.extent(data.map((d) => d[xKey])).map((d) => +d))
        .range([0, innerWidth])
        .nice();
    
    const yScale = d3
        .scaleLinear()
        .domain(d3.extent(data.map((d) => d[yKey])).map((d) => +d))
        .range([innerHeight, 0])
        .nice();

    

    return (
        <>
            <svg width={width} height={height}>
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    {data.map((d, i) => (
                        <circle
                        key={i}
                        cx={xScale(d[xKey])}
                        cy={yScale(d[yKey])}
                        r={1}
                        fill="steelblue"
                        />
                    ))}
                </g>
            </svg>
        </>
    );
}