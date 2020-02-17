import styled, { keyframes }  from 'styled-components'

const rotate = keyframes`
	100% {
			transform: rotate(360deg)
	}
`
const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoadingSpinner = styled.div`
	pointer-events: none;
	width: 2.5em;
	height: 2.5em;
	border: 0.4em solid transparent;
	border-color: #eee;
	border-top-color: black;
	border-radius: 50%;
	animation: ${rotate} 1s linear infinite;
`

export {
  LoadingSpinnerContainer,
  LoadingSpinner
}