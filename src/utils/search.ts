function search<T>(
  list: Array<T>,
  keys: Array<string>,
  query: string,
): Array<T> {
    // if (!query) {
    //     return list;
    // }
  return list.filter(item => {
    return Object.entries(item as Object).filter(
      entry =>
        keys.includes(entry[0]) &&
        new String(entry[1]).toLowerCase().includes(query.toLowerCase()),
    ).length > 0;
  });
}

export default search;