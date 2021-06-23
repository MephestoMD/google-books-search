export function titleLimiter(string) {
  if ([...string].length > 100) {
    return string.slice(0, 99) + "...";
  } else {
    return string;
  }
}
