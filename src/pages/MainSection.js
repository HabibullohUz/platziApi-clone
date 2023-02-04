import React from 'react'

function MainSection() {
  const arr = [
    {
      sectionTitle: 'Introduction',
      sectionDescription: 'Platzi Fake Store API can be used with any type of project that needs products, users, categories, authentication, and users in JSON format. You can use this API for prototyping e-commerce and learning about how to connect to an API with the best practices.',
      secondTitle: "This API includes features like:",
    }
  ]
  return (
    <div>
      {arr.map((item) => (
        <div className="main-section">
          <h1 className="main-section__title">{item.sectionTitle}</h1>
          <p className="main-section__description">{item.sectionDescription}</p>
          <h2 className="main-section__second-title">{item.secondTitle}</h2>
          <ul>
            <li><a href="1">✅ Pagination</a></li>
            <li><a href="1">✅ Auth with JWT</a></li>
            <li><a href="1">✅ Upload Files</a></li>
            <li><a href="1">✅ Filter products by category</a></li>
            <li><a href="1">✅ Create users and check to see if they already exist</a></li>
            <li><a href="1">✅ All CRUD Operations</a></li>
            <li><a href="1">✅ Postman and Insomnia Files</a></li>
            <li><a href="1">✅ And much more</a></li>
          </ul>
        </div>
      ))}

    </div >
  )
}

export default MainSection