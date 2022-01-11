import styled from 'styled-components'

const MyBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  position: relative;
  padding: 10px;
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  :before,
  :after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
  }
  :before {
    top: -2.5%;
    left: -1%;
    border-top: 2px solid black;
    border-left: 2px solid black;
  }
  :after {
    bottom: -2.5%;
    right: -1%;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
  }
  :hover:before,
  :hover:after {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
`
export default MyBtn
