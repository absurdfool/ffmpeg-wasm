var ffmpeg_wasm_default export = {
	async fetch(request,env) {
		const res = env.ASSETS.fetch(request);
		res.headers.append("Cross-Origin-Embedder-Policy", "require-corp");
		res.headers.append("Cross-Origin-Opener-Policy", "same-origin");
		return res;
	},
};
export {
  ffmpeg_wasm_default as default
};
