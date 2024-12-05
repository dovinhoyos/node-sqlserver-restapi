import sql from 'mssql'


const dbSettings = {
    user: "sa",
    password: "yourStrong#Password",
    server: "localhost",
    database: "tienda",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings)
        const result = await pool.request().query("SELECT GETDATE()")
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}