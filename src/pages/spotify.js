import React from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import Section from '../components/spotify-section'
import { StaticImage } from 'gatsby-plugin-image'

const SpotifyPage = () => (
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
        <h1>Hi there, I'm Brendan McDonald</h1>
        <Card>
          <div style={{ maxWidth: 450, minWidth: 250 }}>
            <StaticImage
              src="../images/searching.png"
              styles={{ borderRadius: 3 }}
            />
          </div>
          <span>My friend, Joe, and I looking for jobs at Spotify.</span>
        </Card>
      </div>

      <Section
        text="I want to build new and fun stuff with talented people. People that like to educate and know theres more to learn."
        caption="This looks like a supportive team I could get behind"
        left={false}
      >
        <StaticImage src="../images/team.jpg" styles={{ borderRadius: 3 }} />
      </Section>

      <Section
        text={[
          'So I want to help build the Podcaster Mission, writing ',
          <del>Javascript</del>,
          ' React every day.',
        ]}
        caption="Joe when he sees the new tools I've helped produce"
        left
      >
        <StaticImage src="../images/joe.jpeg" styles={{ borderRadius: 3 }} />
      </Section>
    </div>
  </Layout>
)

export default SpotifyPage
