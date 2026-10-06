import * as fs from 'node:fs';

const html = fs.readFileSync('index.html', { encoding: 'utf8' });

/**
 * Returns an HTML page containing an interactive Web-based tutorial.
 * Visit the function URL to see it and learn how to build with lambda.
 */
export const handler = async () => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: html,
    };
    return response;
};
