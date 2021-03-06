import * as Tone from 'tone'

const samples = [
  'samples/drums-arabic_1.mp3',
  'samples/drums-arabic_2.mp3',
  'samples/drums-arabic_3.mp3',
  'samples/drums-arabic_1.mp3',
  'samples/drums-arabic_2.mp3',
  'samples/drums-arabic_3.mp3',
  'samples/drums-arabic_1.mp3',
  'samples/drums-arabic_2.mp3',
  'samples/drums-arabic_3.mp3',
  'samples/drums-arabic_1.mp3',
  'samples/drums-arabic_2.mp3',
  'samples/drums-arabic_3.mp3'
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
