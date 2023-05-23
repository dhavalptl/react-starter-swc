export default {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    setupFilesAfterEnv: ['<rootDir>/test/setup.ts']
}