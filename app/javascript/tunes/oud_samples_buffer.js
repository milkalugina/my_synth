import * as Tone from 'tone'

const samples = [
  'samples/oud_1.mp3',
  'samples/oud_2.mp3',
  'samples/oud_3.mp3',
  'samples/oud_1.mp3',
  'samples/oud_2.mp3',
  'samples/oud_3.mp3',
  'samples/oud_1.mp3',
  'samples/oud_2.mp3',
  'samples/oud_3.mp3',
  'samples/oud_1.mp3',
  'samples/oud_2.mp3',
  'samples/oud_3.mp3'
]

function createBuffer(path) {
  const sample = new Tone.Buffer(path, () => {
    const buff = sample.get()
  })

  return sample
}

function loadSamples() {
  const loadedSamples = []

  samples.forEach((path, i) => {
    const loadedSample = createBuffer(path)
    loadedSamples.push(loadedSample)
  })

  return loadedSamples
}

export { loadSamples }
