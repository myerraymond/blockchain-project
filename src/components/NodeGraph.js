import * as React from 'react';
import * as d3 from 'd3';
import './styles.css';

function NodeGraph({ details }) {
    const graphRef = React.useRef(null);


    React.useEffect(() => {
        if (details.length > 0) {
            const width = 700;
            const height = 500;

            const svg = d3.select(graphRef.current)
                .attr('width', width)
                .attr('height', height);

            // Create a simulation
            const simulation = d3.forceSimulation(details)
                .force('center', d3.forceCenter(width / 2, height / 2))
                .force('charge', d3.forceManyBody().strength(-30))
                .force('link', d3.forceLink([]).id(d => d.key));

            // Create links between nodes (none in this example)
            // const links = [];

         //   const link = svg.selectAll('.link')
           //     .data(details)
             //   .enter()
               // .append('g')
               // .attr('class', 'link')
               // .style('stroke', 'black')
                //.style('stroke-width', '2px');

            // Create nodes (circles) for each detail
            const nodes = svg.selectAll('.node')
                .data(details)
                .enter()
                .append('circle')
                .attr('class', 'node')
                .attr('r', 20)
                .style('fill', 'url(#gradient)')
                .style('filter', 'url(#drop-shadow)') // Apply drop shadow for depth
                .call(d3.drag()
                    .on('start', dragStarted)
                    .on('drag', dragged)
                    .on('end', dragEnded))
                .on('mouseover', handleMouseOver) // Add mouseover event
                .on('mouseout', handleMouseOut)    // Add mouseout event
            
                
            function dragStarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.2).restart();
                d.fx = d.x;
                d.fy = d.y;
            }
            
            function handleMouseOver(event, d) {
                d3.select(this)
                    .transition()
                    .attr('r', 25); // Increase circle radius on hover
                // Add any other effects you want on hover
            }

            function handleMouseOut(event, d) {
                d3.select(this)
                    .transition()
                    .attr('r', 20); // Restore circle radius on mouseout
                // Remove any hover effects
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragEnded(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            simulation.on('tick', () => {
                nodes
                    .attr('cx', d => d.x)
                    .attr('cy', d => d.y);
            });
            
        }
    }, [details]);

    return (
        <svg
            ref={graphRef}
            className="node-graph"
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="drop-shadow" x="-20%" y="-20%" width="150%" height="150%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                    <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    );
}

export default NodeGraph;