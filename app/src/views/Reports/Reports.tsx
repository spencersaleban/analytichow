import * as React from 'react';
import Header from "../../components/Header/Header";
import ChartistGraph from "react-chartist";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    chart: {
        position: 'relative',
        left: 100,
        top: 100,
        width: '80%',
        background: 'grey',
        color: "white"

    },
    graph: {
        fontcolor: "white"
    }
})

const Reports: React.FC = () => {
    const classes = useStyles();
    var data = {
        labels: ['01/04', '02/04', '03/04', '04/04', '05/04', '06/04', '07/04', '08/04', '09/04', '10/04', '11/04'],
        series: [
            [1, 2, 4, 1, 3, 2, 1, 1, 6, 2]
        ]
    };

    var options = {
        high: 10,
        low: 0,
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
            }
        }
    };

    let type = 'Line'

    return (
        <div className="Reports" data-testid="Reports">
            <div className="Header"><Header/></div>
            <div className={classes.chart}>
            <ChartistGraph className={classes.graph}  data={data} options={options} type={type}/>
            <p>Google Searches</p>
            </div>
        </div>
    );
}

export default Reports;
