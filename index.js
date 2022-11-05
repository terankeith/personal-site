import express from "express"
import "dotenv/config"

const app = express()

app.get("/", (req, res) => {
	res.send("Hello World this is another silly update for me southern mumbles 2")
})

const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Server is listening on ${port}`)
})
