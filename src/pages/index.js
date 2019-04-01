import React from 'react'

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
          <p>I create applications. Innovation is my passion. 👨‍💻</p>
          <p>
            I've always been fascinated by the overlap between design and
            development. My core skills lie in the engineering of modern
            applications but I truly enjoy when user experience can enhance
            developer experience.
          </p>
          <p>Lets build something great 🛠</p>
        </div>
        <div>
          <Button
            to="https://github.com/Rangoons?tab=repositories"
            text="GitHub"
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
