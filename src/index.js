const app = require('./config/express')
const {port} = require('./config/vars')

app.listen(port, () => {console.log(`Server stared on port ${port}`)});