import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

function Header() {
  return (
    <MainDiv>
      <Menu />
    </MainDiv>
  )
}

const MainDiv = styled.div`
  display: flex;
`

export default Header
