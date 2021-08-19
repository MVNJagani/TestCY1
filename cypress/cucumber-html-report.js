// run this command for this file: node cypress\cucumber-html-report.js
// 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
//Token:  vscode://vscode.github-authentication/did-authenticate?windowid=1&code=072b0b9b0865a27a3c49&state=ca066e6b-e48b-4fe9-beac-79d887a62ade 

var reporter = require('cucumber-html-reporter');
var options = {

        theme: 'bootstrap',

        jsonFile: 'cypress/cucumber-json',

        output: './reports/cucumber-htmlreport.html',

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: true,

        metadata: {

            "App Version": "0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"

        }

    };

    reporter.generate(options);