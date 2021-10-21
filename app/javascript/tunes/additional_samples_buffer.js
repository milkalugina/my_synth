import * as Tone from 'tone'

const samples = [
  'samples/additional_1.mp3',
  'samples/additional_2.mp3',
  'samples/additional_3.mp3',
  'samples/additional_1.mp3',
  'samples/additional_2.mp3',
  'samples/additional_3.mp3',
  'samples/additional_1.mp3',
  'samples/additional_2.mp3',
  'samples/additional_3.mp3',
  'samples/additional_1.mp3',
  'samples/additional_2.mp3',
  'samples/additional_3.mp3'
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
