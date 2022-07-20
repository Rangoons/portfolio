import React, { useState } from 'react'
import { generateSlug } from 'random-word-slugs'
import Select from 'react-select'
import styled from 'styled-components'

import Button from './button.js'

const ADJECTIVE_CATEGORIES = [
  'appearance',
  'color',
  'condition',
  'personality',
  'quantity',
  'shapes',
  'size',
  'sounds',
  'taste',
  'time',
  'touch',
].map((o) => ({ label: o, value: o }))

const NOUN_CATEGORIES = [
  'animals',
  'business',
  'education',
  'family',
  'food',
  'health',
  'media',
  'people',
  'place',
  'profession',
  'religion',
  'science',
  'sports',
  'technology',
  'thing',
  'time',
  'transportation',
].map((o) => ({ label: o, value: o }))

const SlugGen = () => {
  const [genSlug, setGenSlug] = useState('')
  const [adjValue, setAdjValue] = useState([ADJECTIVE_CATEGORIES[0]])
  const [nounValue, setNounValue] = useState([NOUN_CATEGORIES[0]])

  function getRandomInt() {
    return Math.floor(Math.random() * 99)
  }

  const generateName = () => {
    const slug = generateSlug(2, {
      format: 'camel',
      partsOfSpeech: ['adjective', 'noun'],
      categories: {
        adjective: adjValue.map((o) => o.label),
        noun: nounValue.map((o) => o.label),
      },
    })

    const number = getRandomInt()

    setGenSlug(`${slug}${number}`)
  }

  return (
    <Column>
      <Wrapper>
        <SelectWrapper>
          <span>Adjective Categories</span>
          <StyledSelect
            label="Adjective Categories"
            options={ADJECTIVE_CATEGORIES}
            isMulti
            defaultValue={adjValue}
            onChange={(val) => setAdjValue(val)}
          />
        </SelectWrapper>
        <SelectWrapper>
          <span>Noun Categories</span>
          <StyledSelect
            label="Noun Categories"
            options={NOUN_CATEGORIES}
            isMulti
            defaultValue={nounValue}
            onChange={(val) => setNounValue(val)}
          />
        </SelectWrapper>
      </Wrapper>
      <Name>{genSlug}</Name>
      <Button text={'GENERATE'} onClick={generateName} />
    </Column>
  )
}

const StyledSelect = styled(Select)`
  width: 300px;
  @media (min-width: 1000px) {
    width: 400px;
  }
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`

const Name = styled.div`
  text-transform: capitalize;
  padding: 0.25rem;
  margin: 1rem;
  font-size: 2rem;
`
export default SlugGen
