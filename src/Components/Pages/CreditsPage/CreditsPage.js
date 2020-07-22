import React from 'react'
import Section from 'Components/Utilities/Layout/Containers/Section';
import Header from 'Components/Utilities/Layout/Containers/Header';
import ContainerWithRow from 'Components/Utilities/Layout/Containers/ContainerWithRow';
import Column from 'Components/Utilities/Layout/Containers/Column';

export default function CreditsPage() {
  return (
    <>
    <Header bg="black" color="white" className="py-5">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-12 text-center mb-3">
            <h1>
              Credits
            </h1>
            <p>
              Everyone who worked on this
            </p>
          </div>
        </div>
      </div>
    </Header>
    <Section className="Category">
      <ContainerWithRow>
        <Column>
          <ol className="custom">
            <li>
              <h3>The WTXtra Team</h3>
              <p>Blog Design and Development handled by these kind folks.</p>
              <a href="https://wtxtra.agency" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              <h3>FreePik</h3>
              <p>Illustrations used throughout the site from FreePik.</p>
              <a href="https://freepik.com" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
          </ol>
        </Column>
      </ContainerWithRow>
    </Section>
    </>
  )
}