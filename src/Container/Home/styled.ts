import { IPropsScroll } from '../../Types'
import styled from 'styled-components'

const BlackLogoContainer = styled.div`
  transition: opacity 0.3s;
  & > svg {
    width: 50px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    transition: opacity 0.3s;
    opacity: ${(props: IPropsScroll) => props.hide ? '0' : '1'};
  }

  &:hover {
    opacity: 0.74;
  }
`

export {
  BlackLogoContainer
}