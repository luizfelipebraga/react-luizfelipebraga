declare module '*.pdf'
interface RefObject<T> {
  // immutable
  readonly current: T | null
}