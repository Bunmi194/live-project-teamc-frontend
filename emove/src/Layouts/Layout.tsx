import React, { ReactNode, useState } from 'react'
import '../styles/layout.styles.css'
export const Layout: React.FC<{
  leftContent?: ReactNode
  rightContent?: ReactNode
  leftContentWidth?: string
  rightContentWidth?: string
  useTopBottomLayout?: boolean
  singleColumnLeft?: boolean
  singleColumnRight?: boolean
  additionalClasses?: string
}> = (props: {
  leftContent?: ReactNode
  rightContent?: ReactNode
  leftContentWidth?: string
  rightContentWidth?: string
  useTopBottomLayout?: boolean
  singleColumnLeft?: boolean
  singleColumnRight?: boolean
  additionalClasses?: string
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        className={`layout ${props.additionalClasses? props.additionalClasses : "" }`}
        style={{
          flexDirection: props.useTopBottomLayout ? 'column' : 'row',
          justifyContent: props.useTopBottomLayout ? 'start' : 'center',
        }}
      >
        <div
          className='left-content'
          style={{ width: props.leftContentWidth }}
        >
          {props.leftContent && (props.leftContent)} 
        </div>
        <div
          className='right-content'
          style={{ width: props.rightContentWidth }}
        >
          {props.rightContent && (props.rightContent)}
        </div>
      </div>
    </div>
  )
}
