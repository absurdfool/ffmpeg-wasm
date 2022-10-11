addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  let originalResponse = await fetch(request)

  let response = new Response(originalResponse.body,originalResponse);

  response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  response.headers.set('Cross-Origin-Opener-Policy','same-origin');

  return response
}