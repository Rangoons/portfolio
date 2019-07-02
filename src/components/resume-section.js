import React from 'react'
import styled from 'styled-components'
import { Colors, Icon, Code } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

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
        {company}, <Muted>{location}</Muted>
      </div>
      <Muted>{date}</Muted>
    </Row>
    <Code>{title}</Code>

    {children}
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      {technologies && (
        <Icon icon={IconNames.BUILD} style={{ margin: '0 10px' }} />
      )}
      <span style={{ color: Colors.BLUE3 }}>{technologies}</span>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`

const Muted = styled.span`
  color: ${Colors.GRAY2};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ResumeSection
