'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function ConstructionChart() {
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
      labels: ['Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 
               'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
               'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
               'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
      datasets: [
        {
          label: 'Quarterly Starts',
          data: [1500, 2800, 2400, 2100, 4600, 3000, 2900, 4700, 3300, 3500, 3800, 7000, 4300, 7600, 7200, 6500,
                 3200, 2400, 2600, 3300, 3200, 1000, 2200, 1300, 2000, 1200, 1400, 900, 1200, 680],
          borderColor: '#005395',
          backgroundColor: 'rgba(0, 83, 149, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Pre-Pandemic Average (2014-2019) 2,616 Units',
          data: Array(30).fill(2616),
          type: 'line' as const,
          borderColor: '#005395',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          pointRadius: 0
        }
      ]
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          max: 8000,
          grid: {
            display: false
          },
          ticks: {
            callback: function(value: any) {
              return value.toLocaleString()
            }
          }
        }
      }
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
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
        <h4>Austin multi-housing starts</h4>
        <canvas ref={chartRef} width={800} height={400} />
      </div>
    </section>
  )
}
