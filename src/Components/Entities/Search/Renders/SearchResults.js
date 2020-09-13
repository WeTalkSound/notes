import React from 'react'
import PostList from 'Components/Entities/Posts/PostList'
import PostPreviewListItem from 'Components/Entities/Posts/Renders/PostPreviewListItem'

export default function SearchResults({results, ...props}) {
  console.log(results)
  return (
    <PostList
      posts={results}
      layout={{
        component: React.Fragment,
        props: {}
      }}
      renderAs={PostPreviewListItem}
    />
  )
}