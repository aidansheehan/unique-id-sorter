function sortUniqueSets(arr) {
  const result = [];

  //function finds only unique IDs in array
  function onlyUniqueIds(element, index, array) {
    return array.indexOf(array.find(x => x.id === element.id)) == index;
  }

  //function finds a new set given old set and new object
  function nextSet(currentSet, newObject) {
  const id = newObject.id
  const index = currentSet.findIndex(object => object.id === id);
  let set2 = currentSet.slice(0);
  set2.splice(index, 1, newObject);
  return set2;
  }

  // Find the First Set
  result.push(arr.filter(onlyUniqueIds));

  // Generate New Sets When Same ID Found
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].id === arr[i-1].id) {
      result.forEach((currentSet) => {
        result.push(nextSet(currentSet, arr[i]))
      });
    }
  }
  return result;
}
