// /* eslint-disable react/jsx-key */
// import React from "react";

// import GaugeBg from "./gauge-bg.png";

// const gaugeWidth = 170;
// const gaugeHeight = 50;
// const gaugeContentWidth = gaugeWidth - 12;
// const gaugeBarsNb = 10;
// const gaugeBarWidth = gaugeContentWidth / gaugeBarsNb;
// const gaugeBarMargin = 1;
// const gaugeBarRadius = 10;

// const lowBattery = 25;

// const styles = {
//     container: {
//       position: "relative", // Explicitly cast to a valid `position` value
//       width: `${gaugeWidth}px`,
//       height: `${gaugeHeight}px`,
//     } as React.CSSProperties,
//     barsContainer: {
//       width: `${gaugeWidth}px`,
//       height: `${gaugeHeight}px`,
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       marginLeft: "3px",
//     } as React.CSSProperties,
//     barContainer: {
//       width: `${gaugeBarWidth}px`,
//       height: `${gaugeHeight - 10}px`,
//       paddingLeft: `${gaugeBarMargin}px`,
//       paddingRight: `${gaugeBarMargin}px`,
//     } as React.CSSProperties,
//     bar: {
//       width: `${gaugeBarWidth - gaugeBarMargin * 2}px`,
//       height: "100%",
//       backgroundColor: "#3f5c8c",
//       zIndex: 1,
//     } as React.CSSProperties,
//     barFirst: {
//       borderTopLeftRadius: `${gaugeBarRadius}px`,
//       borderBottomLeftRadius: `${gaugeBarRadius}px`,
//     } as React.CSSProperties,
//     barLast: {
//       borderTopRightRadius: `${gaugeBarRadius}px`,
//       borderBottomRightRadius: `${gaugeBarRadius}px`,
//     } as React.CSSProperties,
//     barRed: {
//       backgroundColor: "#8b0000",
//     } as React.CSSProperties,
//     bg: {
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       zIndex: 0,
//     } as React.CSSProperties,
//     barText: {
//       marginTop: `5px`,
//     } as React.CSSProperties,
//     red: {
//       color: "red",
//     } as React.CSSProperties,
//     green: {
//       color: "green",
//     } as React.CSSProperties,
//   };
  

// const Battery = ({ percentage }) => {
//   const percent10 = Math.round(percentage / gaugeBarsNb);
//   const percentageArray = [...Array(percent10).keys()];

//   return (
//     <>
//       <div style={styles.container}>
//         <img src={GaugeBg} style={styles.bg} alt="BatteryBG" />
//         <div style={styles.barsContainer}>
//           {percentageArray.map((ele, index) => (
//             <div style={styles.barContainer}>
//               {index === 0 ? (
//                 <div
//                   key={index}
//                   style={{ ...styles.bar, ...styles.barFirst }}
//                 />
//               ) : index === gaugeBarsNb - 1 ? (
//                 <div key={index} style={{ ...styles.bar, ...styles.barLast }} />
//               ) : (
//                 <div key={index} style={{ ...styles.bar }} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={styles.barText}>
//         Drone Battery -
//         {percentage < lowBattery && (
//           <span style={styles.red}> {percentage}% </span>
//         )}
//         {percentage >= lowBattery && (
//           <span style={styles.green}> {percentage}%</span>
//         )}
//       </div>
//     </>
//   );
// };

// export default Battery;
