import ChartComponent from "./ChartComponent";

function ChartPanel(props) {
    return (
        <div className={props.class}>
            <ChartComponent data={props.data} options={props.options} class={props.chartClass} />
            <p>{props.children}</p>
        </div>
    )
}

export default ChartPanel;