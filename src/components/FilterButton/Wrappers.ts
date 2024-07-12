import styled from 'styled-components'
import { Button, Text} from '../../data/Theme/globalStyles'


export const FilterButtonWrapper = styled.li`
  list-style: none;
` 

export const Filter = styled(Button)<{ $isactive: boolean }>`
  ${Text};
  padding-inline: 10px;
  min-width: 90px;
  background-color: ${props => props.$isactive ? props.theme.textColor : props.theme.componentBackGroundColor};
  color: ${props => props.$isactive ? props.theme.mainBackGroundColor : props.theme.textColor};

  &:hover {
    background-color: ${props => props.$isactive ? props.theme.interactiveComponentsBorderColor : props.theme.onHoverBackGroundColor};
  }
  &:focus {
    background-color: ${props => props.$isactive ? props.theme.interactiveComponentsBorderColor : props.theme.onFocusBackGroundColor};
    color: ${props => props.$isactive ? props.theme.mainBackGroundColor : props.theme.textColor};
  }
`