import React from 'react'
import CategoryList from 'Components/Entities/Categories/CategoryList'
import CategoryPreview from 'Components/Entities/Categories/CategoryPreview/CategoryPreview'
import Stack from 'Components/Utilities/Layout/Containers/Stack'

export default function TopCategories() {
  return (
    <div className="Categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-1 offset-md-0 col-md-12">
              <h4 className="text-center">Categories</h4>
              <CategoryList 
                limit={5}
                layout={{
                  component: Stack,
                  props: {}
                }}
                renderAs={CategoryPreview}
              />
            </div>
          </div>
        </div>
      </div>
  )
}