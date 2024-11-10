import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
  
ChartJS.register(
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

function ChartComponent(props) {
    return (
        <div className={props.class}>
            <Line data={props.data} options={props.options} />
        </div>
    )
}

export default ChartComponent;