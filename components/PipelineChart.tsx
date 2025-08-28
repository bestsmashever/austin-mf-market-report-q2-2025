'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function PipelineChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    const data = {
      labels: ['Aug 25', 'Sep 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'May 26', 'Jun 26', 'Jul 26', 'Aug 26', 'Sep 26', 'Oct 26', 'Nov 26', 'Dec 26', 'Jan 27', 'Feb 27', 'Mar 27', 'Apr 27', 'May 27', 'Jun 27', 'Jul 27', 'Aug 27', 'Sep 27', 'Oct 27', 'Nov 27', 'Dec 27', 'Jan 28', 'Feb 28', 'Mar 28', 'Apr 28', 'May 28', 'Jun 28', 'Jul 28', 'Aug 28'],
      datasets: [
        {
          label: 'Under Construction',
          data: [1600, 700, 650, 950, 350, 850, 950, 350, 1600, 350, 1650, 450, 1100, 1050, 600, 600, 800, 600, 600, 350, 300, 550, 700, 1100, 650, 450, 0, 0, 0, 0, 0, 1250, 0, 0, 0, 0, 450],
          backgroundColor: '#2c5282',
          borderWidth: 0
        },
        {
          label: 'Under Construction/Lease-Up',
          data: [0, 1100, 950, 800, 650, 350, 550, 0, 150, 0, 0, 0, 0, 350, 500, 450, 600, 800, 600, 450, 500, 150, 0, 0, 0, 0, 450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: '#63b3ed',
          borderWidth: 0
        },
        {
          label: 'Planned',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 550, 600, 0, 650, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: '#bee3f8',
          borderWidth: 0
        }
      ]
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: '2025 Remaining: 7,347 | 2026: 9,951 | 2027: 3,526 | 2028: 833',
          font: {
            size: 14,
            weight: 'bold' as const
          },
          color: '#005395'
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            font: {
              size: 10
            }
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 2000,
          ticks: {
            callback: function(value: number) {
              return value.toLocaleString()
            }
          }
        }
      },
      elements: {
        bar: {
          borderWidth: 0
        }
      }
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data,
      options
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Delivery Pipeline Exhaustion</h4>
        <canvas ref={chartRef} width={800} height={400} />
      </div>
    </section>
  )
}
