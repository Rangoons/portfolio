import React from 'react'
import { Colors } from '@blueprintjs/core'
import Layout from '../components/layout'
import Image from '../components/image'
import Button from '../components/button'

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h1>Brendan</h1>
          <h1>McDonald</h1>
        </div>
        <div style={{ maxWidth: '78%' }}>
          <p>
            I create applications. Innovation is my passion.{' '}
            <span role="img" aria-label="man on computer">
              👨‍💻
            </span>
          </p>
          <p>
            I've always been fascinated by the overlap between design and
            development. My core skills lie in the engineering of modern
            applications, I truly enjoy when user experience can enhance
            developer experience.
          </p>
          <p>
            Lets build something great{' '}
            <span role="img" aria-label="hammer and wrench">
              🛠
            </span>
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            to="https://github.com/Rangoons?tab=repositories"
            text="GitHub"
          />
          <Button
            to="/resume"
            text="Resume"
            color={Colors.BLUE3}
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
      <div style={{ maxWidth: 200, minWidth: 120, marginBottom: '1.45rem' }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
