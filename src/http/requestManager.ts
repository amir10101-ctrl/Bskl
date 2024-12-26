export class RequestManager {
    private static async fetchWithRetry(
        url: string,
        options: RequestInit,
        retries: number = 3,
        timeout: number = 5000
    ): Promise<any> {
        const controller = new AbortController();
        const signal = controller.signal;

        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { ...options, signal });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            clearTimeout(timeoutId);
            if (retries > 0) {
                console.warn(`Retrying... attempts left: ${retries}`);
                return this.fetchWithRetry(url, options, retries - 1, timeout);
            }
            throw error;
        }
    }

    // متد GET
    static async get(url: string, options: RequestInit = {}, retries: number = 3, timeout: number = 5000): Promise<any> {
        return this.fetchWithRetry(url, { ...options, method: 'GET' }, retries, timeout);
    }

    // متد POST
    static async post(
        url: string,
        body: any,
        options: RequestInit = {},
        retries: number = 3,
        timeout: number = 5000
    ): Promise<any> {
        return this.fetchWithRetry(
            url,
            { ...options, method: 'POST', headers: { 'Content-Type': 'application/json', ...options.headers }, body: JSON.stringify(body) },
            retries,
            timeout
        );
    }

    // متد PUT
    static async put(
        url: string,
        body: any,
        options: RequestInit = {},
        retries: number = 3,
        timeout: number = 5000
    ): Promise<any> {
        return this.fetchWithRetry(
            url,
            { ...options, method: 'PUT', headers: { 'Content-Type': 'application/json', ...options.headers }, body: JSON.stringify(body) },
            retries,
            timeout
        );
    }

    // متد DELETE
    static async delete(
        url: string,
        options: RequestInit = {},
        retries: number = 3,
        timeout: number = 5000
    ): Promise<any> {
        return this.fetchWithRetry(url, { ...options, method: 'DELETE' }, retries, timeout);
    }
}
