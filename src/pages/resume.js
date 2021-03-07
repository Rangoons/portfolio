import React from 'react'
import { H1, Colors } from '@blueprintjs/core'
import IconHeading from '../components/icon-heading'
import IconListing from '../components/icon-listing'
import { IconNames } from '@blueprintjs/icons'
import Layout from '../components/layout'
import ResumeSection from '../components/resume-section'
import Column from '../components/column'
import BulletPoint from '../components/bullet-point'
import styled from 'styled-components'

const ResumePage = () => (
  <Layout>
    <div style={{ fontFamily: 'Raleway' }}>
      <Header>
        <div
          style={{
            display: 'flex',
          }}
        >
          <H1>Brendan </H1>
          <H1>
            <span style={{ color: Colors.BLUE4, marginLeft: 10 }}>
              McDonald
            </span>
          </H1>
        </div>
        <Column>
          <IconListing icon="📞" text="(570) 955-6026" />
          <IconListing
            icon="📬"
            text="hello.brendanm@gmail.com"
          />
          <IconListing icon="🌎" text="brendanmcdonald.me" />
        </Column>
      </Header>
      <hr />
      <Column>
        <IconHeading icon="💼" size={20} text="EXPERIENCE" />
        <ResumeSection
          company="Jointly"
          location="Austin, TX"
          title="Software Engineer"
          technologies="React, TypeScript, Apollo, Next, Jest"
          date="June 2020 - Present"
        >
          <BulletPoint>
            Development of a collaborative real estate transaction management application in a startup environment.
          </BulletPoint>
          <BulletPoint>
            Established unit testing and helped improve state management and optimize application performance.
          </BulletPoint>
          <BulletPoint>
            Working closely with teams across the organization to execute accurately and swiftly.
          </BulletPoint>
        </ResumeSection>
        <ResumeSection
          company="Horry County Government"
          location="Conway, SC"
          title="Full Stack Developer"
          technologies="React, Redux, React Native, C#, GraphQL"
          date="August 2019 - June 2020"
        >
          <BulletPoint>
            Creating custom applications to support the operations of the
            county.
          </BulletPoint>
          <BulletPoint>
            Maintaining older applications written in C#/.NET and adding new
            features to the county's React Native application.
          </BulletPoint>
        </ResumeSection>
        <ResumeSection
          company="EagleDream Technologies"
          location="Rochester, NY"
          title="Front End Developer"
          technologies="React, Redux, Angular, NGRX, RXJS, MySQL, Node.js, TypeScript, Bootstrap, Blueprint"
          date="September 2017 - August 2019"
        >
          <BulletPoint>
            Creating custom applications for clients using an array of
            technologies, primarily with React.
          </BulletPoint>
          <BulletPoint>
            Most time spent as a front end engineer, often providing help with
            debugging and small tasks to the back end teams.
          </BulletPoint>
        </ResumeSection>
        <ResumeSection
          company="ITS-Resnet @ RIT"
          location="Rochester, NY"
          title="Senior Technician & Full Stack Developer"
          technologies="Backbone, PHP, MySQL, Node.js, Bootstrap"
          date="September 2013 - May 2017"
        >
          <BulletPoint>
            As a senior technician, I was responsible for shift management of a
            level 2 technical support team.
          </BulletPoint>
          <BulletPoint>
            As a developer, I worked on a small team that builds and maintains
            internal web apps to support our technical support workflows, such
            as ticket management and electronic training.
          </BulletPoint>
        </ResumeSection>
        {/* <ResumeSection
          company="CareStream Health"
          location="Rochester, NY"
          title="Database Engineer"
          technologies="SQL Server"
          date="June 2015 - January 2016"
        >
          <BulletPoint>
            Gathered requirements for several workflows in the legal department.
            Modeled, automated, and implemented workflow processes using SQL and
            the front-end interface they use.
          </BulletPoint>
        </ResumeSection> */}
        <div>
          <IconHeading
            icon="🧑‍🎓"
            size={20}
            text="EDUCATION"
          />
          <ResumeSection
            company="Rochester Institute of Technology"
            location="Rochester, NY"
            title="Bachelor of Science in Information Technology"
            date="May 2017"
          >
            <BulletPoint>
              Concentration in web development. Coursework in PHP, JS, CSS,
              HTML, data modeling, other OOP courses, and UI/UX design.
            </BulletPoint>
          </ResumeSection>
        </div>
        <div>
          <IconHeading
            icon="🏎"
            size={20}
            text="RECREATION"
          />
          <p>
            I enjoy <BlueText>Jiu Jitsu</BlueText> 🥋, being a 🐶 <BlueText>dad</BlueText>, ⌨️ <BlueText>keyboards</BlueText>, and <BlueText>local breweries</BlueText> 🍻.
          </p>
        </div>
      </Column>
    </div>
  </Layout>
)

const BlueText = styled.span`
  color: ${Colors.BLUE3};
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
