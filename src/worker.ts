export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const res = env.ASSETS.fetch(request);
		res.headers.append("Cross-Origin-Embedder-Policy", "require-corp");
		res.headers.append("Cross-Origin-Opener-Policy", "same-origin");
		return res;
	},
};
