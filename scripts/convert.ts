import fs from 'fs'
import yaml from 'js-yaml'

const files = ['schemata/yakumo-yml.yaml']

;(async () => {
  for (const file of files) {
    const content = await fs.promises.readFile(file, 'utf-8')
    const data = yaml.load(content)
    await fs.promises.writeFile(file.replace(/\.yaml$/, '.json'), JSON.stringify(data, null, 2))
  }
})()
