import React from 'react'
import IconHeading from '../components/icon-heading'
import IconListing from '../components/icon-listing'
import Layout from '../components/layout'
import ResumeSection from '../components/resume-section'
import Column from '../components/column'
import BulletPoint from '../components/bullet-point'
import styled from 'styled-components'
import SlugGen from '../components/slug-gen'

const ResumePage = () => (
  <Layout>
    <div style={{ fontFamily: 'Raleway' }}>
      <SlugGen />
    </div>
  </Layout>
)

const BlueText = styled.span`
  color: #2563eb;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ResumePage
