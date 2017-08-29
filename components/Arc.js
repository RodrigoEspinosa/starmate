import React from 'react'
import styled from 'styled-components'

import { Arc } from '@vx/shape'
import { Group } from '@vx/group'
import { LinearGradient } from '@vx/gradient'

const TextStyle = styled.text`
  fill: white;
  font-family: monospace;
  font-size: 1rem;
`

const Label = ({ x, y, children }) =>
  <TextStyle textAnchor="middle" x={x} y={y} dy="1em">
    {children}
  </TextStyle>

const Shape = ({ width, height, chartData }) => {
  if (width < 10) return null

  const windowInnerHeight = process.browser ? window.innerHeight : 100
  const windowInnerWidth = process.browser ? window.innerWidth : 100
  const radius = Math.min(windowInnerWidth, windowInnerHeight) / 2

  return (
    <svg width={width} height={height}>
      {/* <LinearGradient from="#333333" to="#5A5454" id="gradients" />
      <rect x={0} y={0} width="100%" height="100%" fill="url('#gradients')" /> */}

      <Arc
        fill="white"
        padAngle={0}
        cornerRadius={0}
        data={chartData}
        pieValue={d => d.stars}
        outerRadius={radius - 20}
        top={windowInnerHeight / 2}
        left={windowInnerWidth / 2}
        innerRadius={radius - radius / 2}
        fillOpacity={d => 1 / (d.index + 2)}
        centroid={(centroid, arc) => {
          const [x, y] = centroid
          const { startAngle, endAngle } = arc

          if (endAngle - startAngle < 0.1) {
            return null
          }

          return (
            <Label x={x} y={y}>
              {arc.data.label}
            </Label>
          )
        }}
      />
    </svg>
  )
}

export default Shape
