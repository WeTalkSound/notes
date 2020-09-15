import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'
import PostAuthor from './PostAuthor'
import PostAuthorBio from './PostAuthorBio'
import SocialShare from 'Components/Utilities/SocialShare/SocialShare'
import SyntaxHighlight from 'Components/Utilities/SyntaxHighlight/SyntaxHighlight'
import { htmlDecode, strip_tags } from 'Helpers/Helpers'
import './FullPost.css'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Row from 'Components/Utilities/Layout/Containers/Row'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'

export default function FullPost({ post }) {
  return (
    <div className="FullPost">
      <Helmet>
        <title>{htmlDecode(post.title.rendered)} - WeTalkSound</title>
        <meta name="description" content={strip_tags(post.excerpt.rendered)} />
        <meta property="og:title" content={`${htmlDecode(post.title.rendered)} - WeTalkSound`} />
        <meta property="og:description" content={strip_tags(post.excerpt.rendered)} />
        <meta property="og:image" content={post['_embedded']['wp:featuredmedia'][0]?.source_url} />
        <meta property="og:url" content={`https://blog.wetalksound.co/posts/${post.slug}`} />
        <meta name="twitter:title" content={`${htmlDecode(post.title.rendered)} - WeTalkSound`} />
        <meta name="twitter:description" content={strip_tags(post.excerpt.rendered)} />
        <meta name="twitter:image" content={post['_embedded']['wp:featuredmedia'][0]?.source_url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header className="py-3">
        <Container>
          <Row className="align-items-md-center">
            <Column size={{xs: "12", md: "6"}}>
              <img class="img-fluid" alt={post.title.rendered} src={post['_embedded']['wp:featuredmedia'][0]?.source_url} />
            </Column>
            <Column size={{xs: "12", md: "6"}} className="my-5">
              <span className="category"><small>{post['_embedded']['wp:term'][0][0].name}</small></span>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              >
              </h1>
              <p>
                <small>
                  <PostDate date={post.date} />
                </small>
              </p>
              <PostAuthor
                author={
                  {
                    name: post._embedded.author[0].name,
                    slug: post._embedded.author[0].slug,
                    avatar: post._embedded.author[0].avatar_urls[96],
                  }
                }
              />
            </Column>
          </Row>
        </Container>
      </header>
      <Section style={{padding: "25px 0"}}>
        <Container>
          <Row>
            <Column size={{md: "8"}} offset={{md:"2"}}>
              <div className="wp-content">
                <SyntaxHighlight content={post.content.rendered} />
              </div>
              <Section bg="black" color="white" style={{padding: "20px", borderRadius: "15px", textAlign: "center"}}>
                <h3>About The Author</h3>
                <PostAuthorBio
                  author={
                    {
                      name: post._embedded.author[0].name,
                      description: post._embedded.author[0].description,
                      slug: post._embedded.author[0].slug,
                      avatar: post._embedded.author[0].avatar_urls[96],
                    }
                  }
                />
              </Section>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section bg="accent" color="black" style={{padding: "20px 0", textAlign: "center"}}>
        <Container>
          <Row>
            <Column>
              <h5>Share this article:</h5>
              <SocialShare text={"Read " + htmlDecode(post.title.rendered) + " on WeTalkSound"} url={`https://blog.wetalksound.co/posts/${post.slug}`} tag={"WTS"} />
            </Column>
          </Row>
        </Container>
      </Section>
      
    </div>
  )
}
