import * as Tone from 'tone'

function channel(volume) {
  return new Tone.Channel({
    pan: 0,
    volume: volume
  }).toDestination()
}

export { channel }
