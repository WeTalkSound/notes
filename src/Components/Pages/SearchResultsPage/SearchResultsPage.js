import React from 'react'
import Section from 'Components/Utilities/Layout/Containers/Section';
import Header from 'Components/Utilities/Layout/Containers/Header';
import ContainerWithRow from 'Components/Utilities/Layout/Containers/ContainerWithRow';
import Column from 'Components/Utilities/Layout/Containers/Column';
import SearchResults from 'Components/Entities/Search/Renders/SearchResults';
import Search from 'Components/Entities/Search/Search';
import { Helmet } from 'react-helmet';

export default function SearchResultsPage(props) {

  const searchTerm = new URLSearchParams(props.location.search).get('q')

  return (
    <>
      <Helmet>
        <title>{searchTerm} - Search Results from WeTalkSound</title>
        <meta name="description" content={"Search Results from WeTalkSound"} />
        <meta property="og:title" content={`${searchTerm} - Search Results from WeTalkSound`} />
        <meta property="og:description" content={"Search Results from WeTalkSound"} />
        <meta property="og:image" content={`https://blog-admin.wetalksound.co/extra/thumbnail.png`} />
        <meta property="og:url" content={`https://blog.wetalksound.co/search?q=${searchTerm}`} />
        <meta name="twitter:title" content={`${searchTerm} - Search Results from WeTalkSound`} />
        <meta name="twitter:description" content={"Search Results from WeTalkSound"} />
        <meta name="twitter:image" content={`https://blog-admin.wetalksound.co/extra/thumbnail.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <Header bg="black" color="white" className="py-5">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-12 text-center mb-3">
            <h1>
              Search Results
            </h1>
            <p>
              for “{searchTerm}”
            </p>
          </div>
        </div>
      </div>
    </Header>
    <Section className="SearchResults"  style={{padding: "50px 0"}}>
      <ContainerWithRow>
        <Column>
          <Search 
            for={searchTerm}
            renderAs={SearchResults}
          />
        </Column>
      </ContainerWithRow>
    </Section>
    </>
  )
}