/* eslint-env node */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PACKAGE_JSON_PATH = path.join(__dirname, 'package.json')
const DIST_DIR = path.join(__dirname, 'dist')
const VERSION_JSON_PATH = path.join(DIST_DIR, 'version.json')

const getVersion = () => {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'))
  const version = process.env.VERSION || process.argv[2] || packageJson.version

  if (!version) {
    console.error('Error: version not specified. Use VERSION=1.0.0 node version.js or node version.js 1.0.0')
    process.exit(1)
  }

  return version
}

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const getReleaseDate = () => formatDate(new Date())

const createVersionData = (version, date) => ({
  version,
  date
})

const ensureDistDir = () => {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true })
  }
  return DIST_DIR
}

const writeVersionJson = (version, date) => {
  ensureDistDir()
  const versionData = createVersionData(version, date)
  const content = JSON.stringify(versionData, null, 2) + '\n'

  fs.writeFileSync(VERSION_JSON_PATH, content, 'utf8')
  console.log(`✓ version.json created: ${VERSION_JSON_PATH}`)
}

const main = () => {
  const version = getVersion()
  const date = getReleaseDate()
  writeVersionJson(version, date)
}

main()
