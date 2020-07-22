import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'
import Flex from 'Components/Utilities/Layout/Containers/Flex'
import SendContributionForm from 'Components/Entities/ContributionForms/SendContributionForm'
import ContributionForm from 'Components/Entities/ContributionForms/Renders/ContributionForm'
import Header from 'Components/Utilities/Layout/Containers/Header'

export default function ContributePage() {
  return (
    <>
    <Header bg="black" color="white" className="py-5">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-12 text-center mb-3">
            <h1>
              Contribute
            </h1>
            <p>
              Submit A Pitch For A Guest Article
            </p>
          </div>
        </div>
      </div>
    </Header>
    <Section  style={{padding:"50px 0"}} className="Categories">
      <Flex 
        alignItems="center"
        justifyContent="center"
      >
        <Container>
          <Row className="text-center">
          <Column offset={{md: "3"}} size={{md: "6"}}>
            <h4>Submit A Guest Article</h4>
            <p>
              Please fill the form below to submit a ptich for a guest article
            </p>
            <SendContributionForm
              renderAs={ContributionForm}
              layout={{
                component: React.Fragment,
                props: null
              }}
            />
          </Column>
          </Row>
        </Container>
      </Flex>
    </Section>
    </>
  )
}