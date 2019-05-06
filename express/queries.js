const Pool = require('pg').Pool
const pool = new Pool({
  user: 'prateek',
  host: 'localhost',
  database: 'prateek',
  password: '123456',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM login', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM login WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { user, password } = request.body

  pool.query('INSERT INTO login (id,password) VALUES ($1, $2)', [user, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${user}`)
  })
}

const updateUser = (request, response) => {
const { user, password, newpassword } = request.body

  pool.query(
    'UPDATE login SET id = $1, password = $3 WHERE id = $1 AND password=$2',
    [user, password, newpassword],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${user}`)
    }
  )
}

const deleteUser = (request, response) => {
  const {user} = request.body

  pool.query('DELETE FROM login WHERE id = $1', [user], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${user}`)
  })
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
