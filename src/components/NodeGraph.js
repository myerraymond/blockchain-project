// Import necessary libraries
import * as React from 'react';
import * as d3 from 'd3';
import './styles.css';

// Define the function (NodeGraph)
function NodeGraph({ details }) {
    // Creates a reference to the svg element
    const graphRef = React.useRef(null);

    // Use the useEffect hook, for performing DE data visualisation
    React.useEffect(() => {
        if (details.length > 0) {
            // Defining width and ehight
            const width = 928;
            const height = 600;


            // Select the SVG element using D3, assign width and height
            const svg = d3.select(graphRef.current)
                .attr('width', width)
                .attr('height', height);

            // Create a D3 simulation
            let simulation = d3.forceSimulation(details)
                .force('center', d3.forceCenter(width / 2, height / 2))
                .force('charge', d3.forceManyBody().strength(-10))
                .force('link', d3.forceLink([]).id(d => d.key).distance(20).strength(1));

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

            nodes.append('text')
                .attr('dx', 12)
                .attr('dy', '.35em')
                .text(function (d) { return 'cat'; });  // Set text label

            // Define function for handling drags    
            function dragStarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.2).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            // Define function for handling mouseover
            function handleMouseOver(event, d) {
                d3.select(this)
                    .transition()
                    .attr('r', 25);
            }

            // Define function for handling mouseout
            function handleMouseOut(event, d) {
                d3.select(this)
                    .transition()
                    .attr('r', 20);
            }

            // Define function for handling drag
            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            // Define function for drag end
            function dragEnded(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            // Update the positions of nodes in the simulation
            simulation.on('tick', () => {
                nodes
                    .attr('cx', d => d.x)
                    .attr('cy', d => d.y);

            });



        }
    }, [details]); // Execute the effect when 'details' prop changes

    return (
        // Render the SVG element with custom css
        <svg
            ref={graphRef}
            className="node-graph"
        >
            {/* Define SVG gradients and filters */}

            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#2c3e50', stopOpacity: 1 }} />
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


export default NodeGraph; // Export the NodeGraph component