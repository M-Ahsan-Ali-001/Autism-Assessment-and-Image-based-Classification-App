import * as React from "react"
import Svg, { Path ,G, Ellipse, Circle,Rect,} from "react-native-svg"
import {

    View,
  
  } from 'react-native';
function HomeSvg(props) {
  return (
   <View
   style={{

    backgroundColor:props.bColor,
    borderRadius:300,

    margin:props.margin,
    padding:props.padding,

    justifyContent:'center'
   }}
   >

{props.svgN ===1?(<Svg
      width={props.w}
      height={props.h}
      style={{
        margin:props.marginS,
        padding:props.paddingS,
       
        
      }}
      viewBox="0 0 24 24"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M3 9.847a3 3 0 011.007-2.242l5.336-4.743a4 4 0 015.315 0l5.335 4.743A3 3 0 0121 9.847V18a4 4 0 01-4 4H7a4 4 0 01-4-4V9.847z"
        fill={props.fill}
      />
      <Path
        d="M10 18h4"
        stroke={props.fill}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>):props.svgN===2?(

<Svg 

width={props.w}
      height={props.h}
      style={{
        margin:props.marginS,
        padding:props.paddingS,
       
        
      }}

      fill={props.fill}
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
<Path      d="M10 9a6 6 0 116 6 6 6 0 01-6-6zm16 20H6a3 3 0 01-3-3 9 9 0 019-9h8a9 9 0 019 9 3 3 0 01-3 3z"   fill={props.fill}   />
</Svg>
    ):props.svgN===3?(

        <Svg

        width={props.w}
        height={props.h}
        style={{
          margin:props.marginS,
          padding:props.paddingS,
         
          
        }}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 64 64"
        {...props}
      >
        <Rect width={12} height={6} x={26} y={12} rx={1} />
        <Path d="M18 14a2.006 2.006 0 00-2 2v36a2.006 2.006 0 002 2h28a2.006 2.006 0 002-2V16a2.006 2.006 0 00-2-2h-6v3a3 3 0 01-3 3H27a3 3 0 01-3-3v-3zm25 32H21a1 1 0 010-2h22a1 1 0 010 2zm0-10H21a1 1 0 010-2h22a1 1 0 010 2zm0-12a1 1 0 010 2H21a1 1 0 010-2z" />
      </Svg>
    ):props.svgN===4?(

        <Svg 
        
        width={props.w}
        height={props.h}
        style={{
          margin:props.marginS,
          padding:props.paddingS,
         
          
        }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20.9 11.6c-.1-.1-.1-.2-.2-.3l-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.3 1.3H13c-.6 0-1 .4-1 1s.4 1 1 1h4.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l3-3c.1-.1.2-.2.2-.3.1-.3.1-.5 0-.8z" />
        <Path d="M15.5 18.1c-1.1.6-2.3.9-3.5.9-3.9 0-7-3.1-7-7s3.1-7 7-7c1.2 0 2.4.3 3.5.9.5.3 1.1.1 1.4-.4.3-.5.1-1.1-.4-1.4C15.1 3.4 13.6 3 12 3c-5 0-9 4-9 9s4 9 9 9c1.6 0 3.1-.4 4.5-1.2.5-.3.6-.9.4-1.4-.3-.4-.9-.6-1.4-.3z" />
      </Svg>
    ):null}
   </View>
  )
}

export default HomeSvg
