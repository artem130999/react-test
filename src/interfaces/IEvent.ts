export default interface IEvent {
  messageId: string
  type: 'IDENTITY' | 'TRACK' | 'PAGE'
  value: string
  receivedAt: Date
}
