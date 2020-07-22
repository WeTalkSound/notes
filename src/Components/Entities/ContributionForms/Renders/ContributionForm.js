import React, { useState } from 'react'
import ContainerWithRow from 'Components/Utilities/Layout/Containers/ContainerWithRow'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default function ContributionForm({ onSubmit, message, status  }) {

  const [ contributor, setContributor ] = useState({
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            title: "",
                                            summary: "",
                                            docsUrl: "",
                                          })
  const [ errors, setErrors ] = useState([])

  const validate = () => {
    let errors = []
    if (contributor.firstName.length === 0){
      errors.push("First name cannot be blank")
    }
    if (contributor.lastName.length === 0){
      errors.push("Last name cannot be blank")
    }
    if (contributor.email.length === 0 && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contributor.email))){
      errors.push("Please use a valid email address")
    }
    if (contributor.title.length === 0){
      errors.push("Title cannot be blank")
    }
    if (contributor.summary.length === 0){
      errors.push("Summary cannot be blank")
    }
    setErrors(errors)
    return errors.length === 0
  }
  
  const handleChange = (event) => {
    let name = event.target.getAttribute('name')
    setContributor({...contributor, [name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!validate()) return
    onSubmit(contributor)
  }

  return (
    <>
      <ContainerWithRow>
        <Column size="12">
          <form onSubmit={handleSubmit} className="form">
            <input
              placeholder="Your First Name*"
              onChange={handleChange}
              value={contributor.firstName}
              id="firstName"
              name="firstName"
              type="text"
              className="form-control mb-3"
            />
            <input
              placeholder="Your First Name*"
              onChange={handleChange}
              value={contributor.lastName}
              id="lastName"
              name="lastName"
              type="text"
              className="form-control mb-3"
            />
            <input
              placeholder="Your Email*"
              onChange={handleChange}
              value={contributor.email}
              id="email"
              name="email"
              type="email"
              className="form-control mb-3"
            />
            <input
              placeholder="Article Title*"
              onChange={handleChange}
              value={contributor.title}
              id="title"
              name="title"
              type="text"
              className="form-control mb-3"
            />
            <input
              placeholder="Draft Google Docs URL"
              onChange={handleChange}
              value={contributor.docsUrl}
              id="docsUrl"
              name="docsUrl"
              type="text"
              className="form-control mb-3"
            />
            <textarea 
              placeholder="Article Summary*"
              onChange={handleChange}
              value={contributor.summary}
              id="summary"
              name="summary"
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary">Send</button>
            <div className="text-center">
              {
                errors.map((error, key) => (
                  <p style={{color: "white", padding: "3px", background: "red", marginBottom: "3px"}} key={key}>
                    {error}
                  </p>
                ))
              }
              <p>{message}</p>
            </div>
          </form>
        </Column>
      </ContainerWithRow>
    </>

  )
}
