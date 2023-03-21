export function handleError(e: Error) {
  logError(e);
}

function logError(e: Error) {
  console.log(e.message);
}
