import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import PropTypes from 'prop-types'

const LogoType = ({ height }) => {
  return (
    <Svg viewBox="0 0 100 36" width={100} height={height || 36}>
      <G>
        <Path
          fill="#fff"
          d="M43.2-23.4h4.566V-3.521H43.2V-5.6a8.676,8.676,0,0,1-6.04,2.653,9.331,9.331,0,0,1-4.177-.96,8.518,8.518,0,0,1-2.57-2.019,11.15,11.15,0,0,1-2.646-7.592,10.8,10.8,0,0,1,2.646-7.449,8.493,8.493,0,0,1,6.626-2.98A8.331,8.331,0,0,1,43.2-21.093ZM32.408-13.521a6.969,6.969,0,0,0,1.515,4.653,4.942,4.942,0,0,0,3.919,1.816,5.192,5.192,0,0,0,4.081-1.755,6.84,6.84,0,0,0,1.556-4.612,6.84,6.84,0,0,0-1.556-4.612,5.12,5.12,0,0,0-4.04-1.776,5,5,0,0,0-3.919,1.8A6.662,6.662,0,0,0,32.408-13.521Z"
          x={-4}
          y={28}
        />
        <Path
          fill="#fff"
          d="M7.943,8.05H3.4V-23.385H7.943v2.216a8.282,8.282,0,0,1,6.1-2.78,8.386,8.386,0,0,1,6.687,3.093A11.405,11.405,0,0,1,23.4-13.1a11.229,11.229,0,0,1-2.646,7.629,8.394,8.394,0,0,1-6.626,3.031A8.343,8.343,0,0,1,7.943-5.306ZM18.751-13.081a7.187,7.187,0,0,0-1.535-4.766,4.9,4.9,0,0,0-3.919-1.86,5.114,5.114,0,0,0-4.061,1.8A6.963,6.963,0,0,0,7.68-13.186,7.113,7.113,0,0,0,9.236-8.462a5.03,5.03,0,0,0,4.04,1.818,4.859,4.859,0,0,0,3.9-1.839A6.819,6.819,0,0,0,18.751-13.081Z"
          x={-3}
          y={28}
        />
        <Path
          fill="#fff"
          d="M4.771,2.814c.073.136-.2,12.2-.2,12.2q0,4.907,3.881,4.907t3.881-4.907L12.38,4.061a14.036,14.036,0,0,0,4.609-.978c.049.041-.086,12.035-.086,12.035a12.7,12.7,0,0,1-.589,4.1,6.881,6.881,0,0,1-1.971,2.778A8.672,8.672,0,0,1,8.452,24,8.643,8.643,0,0,1,2.58,21.993,6.993,6.993,0,0,1,.569,19.214,11.275,11.275,0,0,1,0,15.118L.26,0A13.768,13.768,0,0,0,4.771,2.814Z"
          x={73}
          y={9}
          rotation={328}
        />
        <Path
          fill="#fff"
          d="M7.943,7.05H3.4V-23.4H7.943v2.146a8.4,8.4,0,0,1,6.1-2.693,8.5,8.5,0,0,1,6.687,3A10.836,10.836,0,0,1,23.4-13.441,10.67,10.67,0,0,1,20.751-6.05a8.509,8.509,0,0,1-6.626,2.936A8.46,8.46,0,0,1,7.943-5.888ZM18.751-13.421a6.821,6.821,0,0,0-1.535-4.617,4.958,4.958,0,0,0-3.919-1.8A5.188,5.188,0,0,0,9.236-18.1,6.611,6.611,0,0,0,7.68-13.522,6.753,6.753,0,0,0,9.236-8.946a5.1,5.1,0,0,0,4.04,1.762,4.922,4.922,0,0,0,3.9-1.782A6.478,6.478,0,0,0,18.751-13.421Z"
          x={47}
          y={28}
        />
      </G>
    </Svg>
  )
}

LogoType.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default LogoType