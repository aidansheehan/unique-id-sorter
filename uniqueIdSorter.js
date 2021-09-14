function uniqueIdSorter(arr) {
  const result = [];

  // This Function Returns Only the First Unique ID Objects in an Array
  function onlyUniqueIds(element, index, array) {
    return array.indexOf(array.find(x => x.id === element.id)) == index;
  }

  // This Function Finds a New Set Given an Old Set and a New Object
  function nextSet(currentSet, newObject) {
  const index = currentSet.findIndex(object => object.id === newObject.id);
  let newSet = currentSet.slice(0);
  newSet.splice(index, 1, newObject);
  return newSet;
  }

  // Find the First Set
  result.push(arr.filter(onlyUniqueIds));

  // Generate New Sets When Duplicate IDs Found
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].id === arr[i-1].id) {
      result.forEach((currentSet) => {
        result.push(nextSet(currentSet, arr[i]))
      });
    }
  }
  return result;
}
