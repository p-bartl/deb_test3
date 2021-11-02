//import express, { Request, Response } from 'express'
//import bodyParser from 'body-parser'

//const app: express.Application = express()
//const address: string = "0.0.0.0:3000"

//app.use(bodyParser.json())

//app.get('/', function (req: Request, res: Response) {
//    res.send('Hello World!')
//})
//
//app.listen(3000, function () {
//    console.log(`starting app on: ${address}`)
//})


// import dotenv from 'dotenv'
// import { Pool } from 'pg'

// dotenv.config()

// const {
//     POSTGRES_HOST,
//     POSTGRES_DB, 
//     POSTGRES_USER,
//     POSTGRES_PASSWORD,
// } =  process.env 


// const client = new Pool ({
//     host: POSTGRES_HOST,
//     database: POSTGRES_DB,
//     user: POSTGRES_USER,
//     password: POSTGRES_PASSWORD,
// })

// export default client

import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  POSTGRES_TESTTEST_DB,
  ENV,
} = process.env

let client
console.log(ENV)

if(ENV === 'test') {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}

if(ENV === 'testtest') {
    client = new Pool({
      host: POSTGRES_HOST,
      database: POSTGRES_TESTTEST_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
    })
  }

if(ENV === 'dev') {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}

export default client