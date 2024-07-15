import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button, Text } from '../../../data/Theme/globalStyles'

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
`

export const StyledImg = styled.img`
  width: 90%;
  max-width: 820px;
  aspect-ratio: 21/29.7;
  object-fit: contain;
`

export const DLButton = styled(Button)`
  padding-inline: 20px;
`

export const StyledLink = styled(Link)`
  ${Text};
  text-decoration: none;
`