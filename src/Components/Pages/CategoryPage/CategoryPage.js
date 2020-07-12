import React from 'react'
import Category from 'Components/Entities/Categories/Category';
import CategoryDetails from 'Components/Entities/Categories/Renders/CategoryDetails';
import Section from 'Components/Utilities/Layout/Containers/Section';

export default function CategoryPage({ match }) {
  return (
    <Section className="Category">
      <Category 
        match={match}
        layout={{
          component: React.Fragment,
          props: {}
        }}
        renderAs={CategoryDetails}
      />
    </Section>
  )
}