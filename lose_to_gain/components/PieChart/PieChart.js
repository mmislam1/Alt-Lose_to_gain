import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



const PieChart = (prop) => {
  const calorieDist = useSelector(state => state.input)



  const total = calorieDist.fat + calorieDist.protein + calorieDist.carb

  const fat = (calorieDist.fat / total) * 100
  const protein = (calorieDist.protein / total) * 100
  const carb = (calorieDist.carb / total) * 100
  const burntTo = (calorieDist.burnt / calorieDist.trget) * 100



  const [colors, setColors] = useState({ redFrom: "0", redTo: fat.toString(), greenFrom: fat.toString(), greenTo: (fat + protein).toString(), blueFrom: (fat + protein).toString(), blueTo: (fat + protein + carb).toString() })



  const dispatch = useDispatch()


  useEffect(() => {

    setColors({ redFrom: "0", redTo: fat.toString(), greenFrom: fat.toString(), greenTo: (fat + protein).toString(), blueFrom: (fat + protein).toString(), blueTo: (fat + protein + carb).toString() })


  }, [dispatch, calorieDist])



  return (
    <div className='pieChartSection'>
      <div className='pieChartArea'>
        <div className="pieChartBox">
          <div className='pieChart' style={{ backgroundImage: `conic-gradient(red ${colors.redFrom}%,red ${colors.redTo}%, green ${colors.greenFrom}%,green ${colors.greenTo}%,blue ${colors.blueFrom}%, blue  ${colors.blueTo}%)` }}>
            <div className='pieChartInnerCircle'>
              <div className='pieChartTextBox'>
                <p className='pieChartText'>{total + " cal."}</p>
              </div>
            </div>
          </div>
        </div><h4>Calorie Intake</h4>
      </div>
      <div className='pieChartArea'>
        <div className='pieChartBox'>
          <div className='pieChart' style={{ backgroundImage: `conic-gradient( green 0%,green ${burntTo.toString()}%,rgb(220,220,220) ${burntTo.toString()}%, rgb(220,220,220) 100%)` }}>
            <div className='pieChartInnerCircle'>
              <div className='pieChartTextBox'>
                <p className='pieChartText'>{calorieDist.burnt + " cal."}</p>
              </div>
            </div>
          </div></div>
        <h4>Calories Burnt</h4>
      </div>
      <div className='pieChartArea'>
        <div className='pieChartBox'>
          <div className='pieChart' style={{ backgroundImage: `conic-gradient(red 0%,red ${(((calorieDist.trget - calorieDist.burnt) / calorieDist.trget) * 100).toString()}%,rgb(220,220,220) ${(((calorieDist.trget - calorieDist.burnt) / calorieDist.trget) * 100).toString()}%, rgb(220,220,220)  100% )` }}>
            <div className='pieChartInnerCircle'>
              <div className='pieChartTextBox'>
                <p className='pieChartText'>{(calorieDist.trget - calorieDist.burnt) + " cal."}</p>
              </div>
            </div>
          </div>
        </div>
        <h4>Remaining</h4>
      </div></div>
  )
}

export default PieChart