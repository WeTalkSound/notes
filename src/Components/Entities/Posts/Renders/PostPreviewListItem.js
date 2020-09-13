import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './PostPreview.css'
import PostDate from './PostDate'
import Row from 'Components/Utilities/Layout/Containers/Row'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default class PostPreviewListItem extends Component {
  render() {
    return (
      <div className="PostPreviewListItem">
        <Row>
          <Column size={{md: "4"}}>
            <Link to={this.props.post.link}>
              <img src={this.props.post.image} className="card-img-top" alt={this.props.post.title} />
            </Link>
          </Column>
          <Column size={{md: "8"}}>
            <span>
              {this.props.post.category}
            </span>
            <Link to={this.props.post.link} className="title">
                <h5 className="mb-0" dangerouslySetInnerHTML={{ __html: this.props.post.title }}>
                </h5>
            </Link>
            <p className="mt-0">
              <small>
                {this.props.post.author} - <PostDate date={this.props.post.datePublished} />
              </small>
            </p>
            <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}>
            </div>
            <div>
              <Link to={this.props.post.link} className="btn btn-primary">
                Read Now
              </Link>
            </div>
          </Column>
        </Row>
      </div>
    )
  }
}
