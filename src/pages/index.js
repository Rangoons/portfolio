import React from 'react'
import { Colors } from '@blueprintjs/core'
import styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import LocalButton from '../components/local-button'
import ExternalButton from '../components/external-button'

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
        <div style={{ marginBottom: '2rem', display:'flex', alignItems: 'center' }}>

          <h1>Sub domain spotify test</h1>



        </div>
      </div>
  </Layout>
)

const Container = styled.div`
max-width: 78%;
@media (min-width: 375px)  { 
max-width: 100%;
}
@media (min-width: 320px) {
max-width: 100%;
}
`

export default IndexPage
