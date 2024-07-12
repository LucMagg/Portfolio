import styled from 'styled-components'
import { Text, Button } from '../../data/Theme/globalStyles'
import { Form } from 'react-router-dom'


export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`

export const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${Text}
  font-weight: 500;
`

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.componentBackGroundColor};
  border: 1px solid ${(props) => props.theme.componentsBorderColor};
  border-radius: 5px;
  ${Text}
  padding: 5px;
  
  &:focus {
    outline-color: ${(props) => props.theme.focusRingColor};
  }
`

export const StyledTextarea = styled.textarea`
  background-color: ${(props) => props.theme.componentBackGroundColor};                                                                 
  border: 1px solid ${(props) => props.theme.componentsBorderColor};
  border-radius: 5px;
  ${Text}
  padding: 5px;
  
  &:focus {
    outline-color: ${(props) => props.theme.focusRingColor};
  }
`

export const StyledButton = styled(Button)`
  padding-inline: 10px;
  ${Text}
`