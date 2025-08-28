'use client'

import { useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
)

interface ChartWrapperProps {
  children: React.ReactNode
}

export default function ChartWrapper({ children }: ChartWrapperProps) {
  useEffect(() => {
    // Ensure Chart.js is properly initialized
    if (typeof window !== 'undefined') {
      // Chart.js is now ready
    }
  }, [])

  return <>{children}</>
}
