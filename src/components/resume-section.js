import React from 'react'
import styled from 'styled-components'

const ResumeSection = ({
  company,
  location,
  title,
  technologies,
  date,
  children,
}) => (
  <Wrapper>
    <Row>
      <div>
        {company}, <span className="text-gray-500">{location}</span>
      </div>
      <span className="text-gray-500">{date}</span>
    </Row>
    <code>{title}</code>

    {children}
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      {technologies && <icon style={{ margin: '0 10px' }}>🛠</icon>}
      <span className="text-blue-500">{technologies}</span>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ResumeSection
