module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "transform": {
        "^.+\\.ts?$": "ts-jest"
    },
    "testRegex": "(/__test__/)(.*)(Test)\\.(ts)$",
    "moduleFileExtensions": [
        "ts",
        "js",
        "json",
        "node"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 95,
            "functions": 95,
            "lines": 95,
            "statements": 95
        }
    },
    "collectCoverageFrom": [
        "src/services/*.ts",
        "!src/api/rest/v1/routes/*.d.ts",
        "!src/api/rest/v1/routes/*.ts",
        "!src/db/*.ts",
        "!src/db/models/*.ts",
    ],
};
