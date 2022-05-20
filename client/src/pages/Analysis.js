import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from "react-vis";
import React, { useContext} from 'react';
import UserContext from '../UserContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AnalysisStyled = styled.div`
    min-height: 100vh ;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    padding-bottom: 2rem ;
    a{
    margin: 0 auto ;
    margin-top: 2rem;
    margin-bottom: 2rem ;
  }
`

const Analysis = () => {
  const {userData, setUserData} = useContext(UserContext);
  const dataPoints = userData?.userDatapoints
  
  const groupAData = dataPoints.filter(dataPoint => dataPoint.drug === "Group A");
  const groupBData = dataPoints.filter(dataPoint => dataPoint.drug === "Group B");

  const groupABefore = groupAData.map(array => array.measureBefore);
  const groupAAfter = groupAData.map(array => array.measureAfter);
  const groupBBefore = groupBData.map(array => array.measureBefore);
  const groupBAfter = groupBData.map(array => array.measureAfter);

  const getAverage = (arr) => {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  const  groupADifference = getAverage(groupAAfter) - getAverage(groupBBefore)
  const groupBDifference = getAverage(groupBAfter) - getAverage(groupABefore)

  const dataPointsUrl = userData ? `/user/${userData.id}/datapoints` : ""

  const beforeData = [{ x: "Group A Before", y: getAverage(groupABefore) }, { x: "Group B Before", y: getAverage(groupBBefore) }];
  const afterData = [{ x: "Group A After", y: getAverage(groupAAfter) }, { x: "Group B After", y: getAverage(groupBAfter)}];
  
  const BarSeries = VerticalBarSeries;

  return ( <AnalysisStyled>
    <Link to={dataPointsUrl}> Back to Data</Link>
    <p>
      As can be seen below the difference in averages of Group of group A is {groupADifference}
    </p>
    <p>
      The difference in averages of Group B is {groupBDifference}
    </p>
    <p>
      {groupADifference > groupBDifference && `We can conclude that group A had a stronger effect by an average score of ${groupADifference - groupBDifference} points`}
      {groupBDifference > groupADifference && `We can conclude that group B had a stronger effect by an average score of ${groupBDifference - groupADifference} points`}

    </p>
    <XYPlot

        animation
        xType="ordinal"
        width={500}
        height={500}
        xDistance={100}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={beforeData} />
        <BarSeries data={afterData} />
      </XYPlot>
  </AnalysisStyled> );
}
 
export default Analysis;
