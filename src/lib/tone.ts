export type Tone = 'blue' | 'green' | 'orange' | 'red' | 'violet'

const TONES: Tone[] = ['blue', 'green', 'orange', 'red', 'violet']

export const toneAt = (index: number): Tone => TONES[index % TONES.length]
