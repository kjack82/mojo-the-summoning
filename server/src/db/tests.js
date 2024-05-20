const sequelize = require('./config.js')

async function main() {
    await sequelize.authenticate()
}

main()