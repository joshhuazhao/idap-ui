import * as d3 from "d3"
import { useEffect, useRef, useState } from "react"

export function CpuUsageChart() {
    const svgRef = useRef<SVGSVGElement>(null)
    const [data, setData] = useState<number[]>(Array(60).fill(0))

    useEffect(() => {
        // Simulate real-time data update
        const interval = setInterval(() => {
            setData((prevData) => {
                const newData = [...prevData.slice(1), Math.random() * 100]
                return newData
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (!svgRef.current) return

        const svg = d3.select(svgRef.current)
        const width = 800
        const height = 300
        const margin = { top: 20, right: 20, bottom: 30, left: 50 }

        svg.selectAll("*").remove()

        const x = d3
            .scaleLinear()
            .domain([0, data.length - 1])
            .range([margin.left, width - margin.right])

        const y = d3
            .scaleLinear()
            .domain([0, 100])
            .range([height - margin.bottom, margin.top])

        const line = d3
            .line<number>()
            .x((_, i) => x(i))
            .y((d) => y(d))
            .curve(d3.curveMonotoneX)

        // Add X axis
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(10))

        // Add Y axis
        svg
            .append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))

        // Add grid lines
        svg
            .append("g")
            .attr("class", "grid")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(
                d3
                    .axisBottom(x)
                    .tickSize(-(height - margin.top - margin.bottom))
                    .tickFormat(() => ""),
            )
            .style("stroke-opacity", 0.1)

        svg
            .append("g")
            .attr("class", "grid")
            .attr("transform", `translate(${margin.left},0)`)
            .call(
                d3
                    .axisLeft(y)
                    .tickSize(-(width - margin.left - margin.right))
                    .tickFormat(() => ""),
            )
            .style("stroke-opacity", 0.1)

        // Add path
        svg
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line)

    }, [data])

    return (
        <div className="w-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <h3 className="mb-4 font-semibold text-lg leading-none tracking-tight">Real-time CPU Usage</h3>
            <div className="flex justify-center overflow-hidden">
                <svg ref={svgRef} width={800} height={300} viewBox="0 0 800 300" className="max-w-full overflow-visible" />
            </div>
        </div>
    )
}
