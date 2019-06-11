const { app, build } = require('./app')

const IS_PROD = process.env.NODE_ENV === 'production'
const PORT = IS_PROD ? 80 : 3000

require('dotenv').config({
  path: `./.env.${IS_PROD ? 'production' : 'development'}`,
})

main()

async function main() {
  if (!IS_PROD) {
    await build()
  }

  app.listen(PORT)
}
