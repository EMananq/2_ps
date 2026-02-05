import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './Charts.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface TimelineItem {
  date: string;
  sentimentScore: number;
  title: string;
}

interface SentimentTrendChartProps {
  data: TimelineItem[];
}

export default function SentimentTrendChart({ data }: SentimentTrendChartProps) {
  // Sort by date
  const sorted = [...data].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const labels = sorted.map(item => {
    const date = new Date(item.date);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Sentiment',
        data: sorted.map(item => item.sentimentScore),
        borderColor: 'rgba(102, 126, 234, 1)',
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: sorted.map(item => 
          item.sentimentScore > 0 
            ? 'rgba(34, 197, 94, 1)' 
            : item.sentimentScore < 0 
              ? 'rgba(239, 68, 68, 1)' 
              : 'rgba(107, 114, 128, 1)'
        ),
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      y: {
        min: -1.5,
        max: 1.5,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          callback: (value: number) => {
            if (value === 1) return 'Positive';
            if (value === 0) return 'Neutral';
            if (value === -1) return 'Negative';
            return '';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(20, 20, 40, 0.95)',
        titleColor: '#fff',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => {
            const item = sorted[context.dataIndex];
            const sentiment = item.sentimentScore > 0 ? 'Positive' : item.sentimentScore < 0 ? 'Negative' : 'Neutral';
            return [`Sentiment: ${sentiment}`, item.title.substring(0, 40) + '...'];
          }
        }
      }
    }
  };

  return (
    <div className="chart-wrapper">
      <h4 className="chart-title">Sentiment Trend</h4>
      <div className="chart-container">
        <Line data={chartData} options={options as any} />
      </div>
    </div>
  );
}
