import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json"; // error details will be written to this file

function sampleError() {
    throw new Error('Sample Error');
}

sampleError();