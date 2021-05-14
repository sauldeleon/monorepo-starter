// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// List of message warnings we want to filter from warning logs in tests
const filteredWarnMessages: string[] = []
const privateWarnLog = console.warn
jest.spyOn(console, 'warn').mockImplementation((msg: string, ...args: unknown[]) => {
  filteredWarnMessages.some(message => msg.includes(message)) ? jest.fn() : privateWarnLog(msg, ...args)
})

// List of message errors we want to filter from error logs in tests
const filteredErrorMessages: string[] = ['when doing server-side rendering']
const privateErrorLog = console.error
jest.spyOn(console, 'error').mockImplementation((msg: string, ...args: unknown[]) => {
  filteredErrorMessages.some(message => msg.includes(message)) ? jest.fn() : privateErrorLog(msg, ...args)
})
