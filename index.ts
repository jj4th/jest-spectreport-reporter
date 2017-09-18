import "jest";

class JestSpectreportReporter implements jest.Reporter {
    constructor(
        readonly globalConfig: jest.GlobalConfig,
        readonly options: jest.ReporterConfig,
    ) { }

    public onRunStart(
        results: jest.AggregatedResult,
        options: jest.ReporterOnStartOptions,
    ) {
        return;
    }

    public onRunComplete(
        contexts: Set<jest.Context>,
        results: jest.AggregatedResult,
    ) {
        return;
    }

    public onTestStart(
        test: jest.Test,
    ) {
        return;
    }

    public onTestResult(
        test: jest.Test,
        testResult: jest.TestResult,
        aggregatedResult: jest.AggregatedResult,
    ) {
        return;
    }
}

export default JestSpectreportReporter;
