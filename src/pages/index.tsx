import * as React from 'react'

import { PrimaryButton, SecondaryButton, Title } from 'components/elements'

export interface HomeProps {}

export const Home = (props: HomeProps) => (
    <>
        <Title>Welcome to a fun SWAPI Game!</Title>
        <br/>
        <PrimaryButton as="a" href="/game">Play a new game</PrimaryButton>
        <br/>
        <SecondaryButton as="a" href="/history">History</SecondaryButton>
    </>
)