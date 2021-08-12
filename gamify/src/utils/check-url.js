export default function checkUrl(url) {
  // TODO: needs improvement
  return url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi) !== null;
}
