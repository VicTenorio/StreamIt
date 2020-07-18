import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const ButtonComponent = styled.button`
  width: 100%;
  height: 45px;
  margin: 16px 8px;
  font-size: 22px;
  font-weight: 300;
  border-radius: 20px;
  background-color: ${(props: ButtonProps) => props.isSecondary ? colors.light : colors.colorPrimary};
  color: ${(props: ButtonProps) => props.isSecondary ? colors.colorPrimary : colors.white};
  border-color: ${(props: ButtonProps) => props.isSecondary ? colors.light : colors.colorPrimary};
`

interface ButtonProps { 
    isSecondary?: boolean
    title?: string
}

export const Button: React.FC<ButtonProps> = ({ isSecondary, title }) => {
    return (
        <ButtonComponent type='button' isSecondary={isSecondary}>{title}</ButtonComponent>
    )
}