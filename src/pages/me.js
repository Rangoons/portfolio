import React from 'react'
import styled from 'styled-components'
import Image from '../components/image'
import LocalButton from '../components/local-button'
import ExternalButton from '../components/external-button'
import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <div
        style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}
      >
        <span>
          <h1>Brendan</h1>
          <h1 style={{ marginBottom: '-24px' }}>McDonald</h1>
        </span>
        <div style={{ maxWidth: 250, minWidth: 150 }}>
          <Image />
        </div>
      </div>
      <Container>
        <p>
          I create applications. Motivated by innovation.{' '}
          {/* <span role="img" aria-label="man on computer">
              👨‍💻
            </span> */}
        </p>
        <p>
          I've always been fascinated by the overlap between design and
          development, finding passion in delivering high-quality client
          experiences. I have a desire to be challenged by development and enjoy
          sharing the software I've built and want to make an impact whenever I
          can.
        </p>
        <p>
          Lets build something great{' '}
          <span role="img" aria-label="hammer and wrench">
            🛠
          </span>
        </p>
      </Container>
      <div style={{ display: 'flex' }}>
        <ExternalButton
          to="https://github.com/Rangoons?tab=repositories"
          text="GitHub"
        />
        <LocalButton
          to="/resume"
          text="Resume"
          color="#3B82F6"
          style={{ marginLeft: 20 }}
        />
      </div>
    </div>
  </Layout>
)

const Container = styled.div`
  max-width: 78%;
  @media (min-width: 375px) {
    max-width: 100%;
  }
  @media (min-width: 320px) {
    max-width: 100%;
  }
`

export default AboutPage
