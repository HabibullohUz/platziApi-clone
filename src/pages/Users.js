import axios from 'axios';
import React, { useEffect } from 'react'

function Users() {

  const [users, setUsers] = React.useState([])

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/users?offset=0&limit=3') /* ? offset = 0 & limit=10 */
      .then((res) => {
        setUsers(res.data)
      })
  }, [])

  return (
    <div className="users-container">
      <div className="users__title-wrapper">
        <h1 className="users-title">Get users</h1>
        <p className="users-url">
          [GET] https://api.escuelajs.co/api/v1/users
        </p>
      </div>
      <div className="user-cards ">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user__image-wrapper">
              <img
                className="user-img"
                src={user.avatar}
                alt="1"
              />
            </div>
            <div className="card-infos">
              <h2 className="user-title">{user.email}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users