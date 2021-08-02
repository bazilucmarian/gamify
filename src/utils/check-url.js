export default function checkUrl(url) {
  // TODO: needs improvement
  return url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
}
