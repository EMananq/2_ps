import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Charts.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ESGDistributionChartProps {
  data: {
    E: number;
    S: number;
    G: number;
  };
}

export default function ESGDistributionChart({ data }: ESGDistributionChartProps) {
  const chartData = {
    labels: ['Environmental', 'Social', 'Governance'],
    datasets: [
      {
        data: [data.E, data.S, data.G],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(14, 165, 233, 1)',
          'rgba(139, 92, 246, 1)'
        ],
        borderWidth: 2,
        hoverOffset: 8
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          padding: 16,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(20, 20, 40, 0.95)',
        titleColor: '#fff',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8
      }
    }
  };

  return (
    <div className="chart-wrapper">
      <h4 className="chart-title">ESG Distribution</h4>
      <div className="chart-container">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
