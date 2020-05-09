import DATA_JSON from './data.json';

const result: any[][] = [];

DATA_JSON.data.forEach((issue: any) => {
    const array: number[] = [];
    issue.resultArea1.split(',').forEach((number: string) => {
        array.push(Number(number));
    });
    result.push([
        issue.issueNo,
        array
    ]);
});

export default result;
