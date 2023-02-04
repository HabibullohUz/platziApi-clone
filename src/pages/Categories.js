import axios from 'axios'
import React, { useEffect } from 'react'

function Categories() {

  const [categories, setCategories] = React.useState([])

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5')
      .then((res) => {
        setCategories(res.data)
      })
  }, [])

  return (
    <div className="categories-container">
      <div className="categories__title-wrapper">
        <h1 className="categories-title">Get categories</h1>
        <p className="categories-url">
          [GET] https://api.escuelajs.co/api/v1/categories
        </p>
      </div>
      <div className="category-cards ">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="category__image-wrapper">
              <img
                className="category-img"
                src={category.image}
                alt="1"
              />
            </div>
            <div className="card-infos">
              <h2 className="category-title">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories