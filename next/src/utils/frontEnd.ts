// API HOST define for per environments
const dev = process.env.NODE_ENV !== 'production';
export const API_HOST = dev ? 'http://localhost:3000' : 'https://deployment.server.com';

const request = async (method: string, loc: string, body?: {}) => {
    const res = await fetch(`${API_HOST}/api` + loc, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    try {
        return { status: res.status, body: await res.json() };
    } catch {
        return { status: res.status };
    }
};

export { request };
