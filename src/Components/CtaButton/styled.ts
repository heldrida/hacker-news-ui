import styled from "styled-components"
import { IPropsTheme } from '../../Types'

const CtaButton = styled.button<IPropsTheme>`
  /* background: ${(props: IPropsTheme) => props.theme.onyx}; */
  background: ${(props: IPropsTheme) => props.theme.orange};
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 0 2rem;
  margin: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 2px 6px 22px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.68;
  }
`

export default CtaButton