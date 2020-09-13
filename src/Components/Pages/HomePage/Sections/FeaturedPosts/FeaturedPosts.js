import React from "react"
import PostList from "Components/Entities/Posts/PostList"
import CardColumns from "Components/Utilities/Layout/Containers/CardColumns"
import PostPreviewCard from "Components/Entities/Posts/Renders/PostPreviewCard"

export default function FeaturedPosts() {
  return (
    <section className="FeaturedPosts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Featured Articles</h4>
            <PostList
              limit={3}
              layout={{
                component: CardColumns,
                props: {}
              }}
              renderAs={PostPreviewCard}
            />
          </div>
        </div>
      </div>
    </section>
  )
}