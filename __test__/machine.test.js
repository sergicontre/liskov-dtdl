const { getAllModels } = require('../__utils__')

describe('Machine - Liskov Principle', () => {
  let machineModel
  let iAsset

  beforeAll(async () => {
    const models = await getAllModels()
    machineModel = models['dtmi:com:example:Machine;1']
    iAsset = models['dtmi:com:example:IAsset;1']
  })

  it('Interface should exists', () => {
    expect(machineModel.sourceObject['@type']).toBe('Interface')
  })

  it('Should extend IAsset Base Model', () => {
    const iAsset = machineModel.extends.filter(id => id === 'dtmi:com:example:IAsset;1')
    expect(iAsset).toBeDefined()
  })

  it('Verifies does not have new properties', () => {
    const machineProperties = Object.keys(machineModel.contents);
    const iAssetProperties = Object.keys(iAsset.contents);
    const newProperties = machineProperties.filter(property => !iAssetProperties.includes(property));
    expect(newProperties.length).toBe(0);
  })
})