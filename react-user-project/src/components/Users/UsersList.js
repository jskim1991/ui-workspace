import React from 'react'

import Card from '../UI/Card'

const UsersList = (props) => {
    return (
        <Card>
            <ul>
                {Array.isArray(props.users) && props.users.length > 0
                    ? props.users.map((user) => {
                          return (
                              <li key={user.id}>
                                  {user.name} ({user.age} years old)
                              </li>
                          )
                      })
                    : null}
            </ul>
        </Card>
    )
}

export default UsersList
