import React, {Component} from 'react';
import {Bar,Line,Pie,Radar} from 'react-chartjs-2';


export default class Chart extends Component{
   
   
    // state = {
    //     chartData:this.props.chartData
    // }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'top'
    }
    render(){
        // console.log(this.props.chartData)
        
        return(
            <div className='chart'>
                <Bar
                data={this.props.chartData}
                options={{
                    title:{
                      display:this.props.displayTitle,
                      text:'popular baby names ',
                      fontSize:25
                    },
                    legend:{
                      display:this.props.displayLegend,
                      position:this.props.legendPosition
                    },
                    scales:{
                      yAxes:[{
                        ticks: {
                          beginAtZero:true
                        }
                      }]
                    }
                  }}
                />
                {/* <Pie
          data={this.props.chartData}
          width={50}
          height={20}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'popular baby names ',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> */}

        {/* <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'popular baby names ',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> */}

            {/* <Radar
            data={this.props.chartData}
            options={{
                title:{
                display:this.props.displayTitle,
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                }
            }}
            />   */}
     </div>
        )
    }
}