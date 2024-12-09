import {getConnection} from '../database/connection.js'
export class ProductsControllers {
    getProducts = async(req, res) => {
        const pool = await getConnection()
        const result = await pool.request().query('SELECT * FROM products')
        console.log(result)
    }
    getProduct = (req, res) => {
        res.send('HEllo world')
    }
    createProduct = (req, res) => {
        res.send('HEllo world')
    }
    updateProduct = (req, res) => {
        res.send('HEllo world')
    }
    deleteProduct = (req, res) => {
        res.send('HEllo world')
    }
}