import app from './app.js'
import { getConnection } from './database/connection.js'

const PORT = process.env.PORT ?? 3000

getConnection()

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})