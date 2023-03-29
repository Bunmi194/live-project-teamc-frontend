import React, { useState } from 'react'
import '../styles/layout.styles.css'
export const Layout: React.FC<{
  leftContent?: React.FC | string
  rightContent?: React.FC | string
  leftContentWidth?: string
  rightContentWidth?: string
  useTopBottomLayout?: boolean
  singleColumnLeft?: boolean
  singleColumnRight?: boolean
}> = (props: {
  leftContent?: React.FC | string
  rightContent?: React.FC | string
  leftContentWidth?: string
  rightContentWidth?: string
  useTopBottomLayout?: boolean
  singleColumnLeft?: boolean
  singleColumnRight?: boolean
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        className='layout'
        style={{
          flexDirection: props.useTopBottomLayout ? 'column' : 'row',
          justifyContent: props.useTopBottomLayout ? 'start' : 'center',
        }}
      >
        <div
          className='left-content'
          style={{ width: props.leftContent ? props.leftContentWidth || '50%' : 'unset' }}
        >
          {props.leftContent && <> props.leftContent</>} 
        </div>
        <div
          className='right-content'
          style={{ width: props.rightContent ? props.rightContentWidth || '50%' : 'unset' }}
        >
          {props.rightContent && <> props.rightContent</>}
        </div>
      </div>
    </div>
  )
}
