export function video(obj) {
  const array = obj.results
  return array
    .filter((ele) => ele.type === 'Trailer')
    .map((ele) => {
      return ele.key
    })
}
