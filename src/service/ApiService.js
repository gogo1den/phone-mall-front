import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
  if (method !== "GET" && request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  });
}

export function searchByTitle(title) {
  return call(`/product/search?title=${encodeURIComponent(title)}`, "GET");
}