"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export type IOptions = ChartOptions<"line">
export type IData = ChartData<"line">

function LineChart({ data }: { data: IData }) {
  const options: IOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      }
    }
  }

  return (
    <div className="relative w-full h-full">
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
