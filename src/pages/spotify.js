import React from 'react'
import Searching from '../components/images/searching'
import Card from '../components/card'
import Layout from '../components/layout'

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
            <Searching styles={{ borderRadius: 3 }} />
          </div>
          <span>My friend, Joe, and I looking for jobs at Spotify.</span>
        </Card>
      </div>
      <div
        style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}
      >
        <h1>Sub domain spotify test</h1>
        <Card>
          <div style={{ maxWidth: 450, minWidth: 250 }}>
            <Searching styles={{ borderRadius: 3 }} />
          </div>
          <span>My friend, Joe, and I looking for jobs at Spotify.</span>
        </Card>
      </div>
      <Card>
        <div class="flex-shrink-0">
          <Searching styles={{ borderRadius: 3 }} />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </Card>
    </div>
  </Layout>
)

export default SpotifyPage
