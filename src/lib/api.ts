// the trailing slash is required
// export const API_URL = 'https://skyblock-api.matdoes.dev/'
export const API_URL = import.meta.env.DEV ? 'http://localhost:8080/' : 'https://statsapi.tem.cx/'

export async function fetchApi(path: string, fetch: (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>, init?: RequestInit | undefined) {
	// the header is set in hooks.server.ts
	const response = await fetch(API_URL + path, init)
	return response
}