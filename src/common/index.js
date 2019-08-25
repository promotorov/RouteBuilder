export function dragArrayItem(array, draggedIndex, draggedOverIndex) {
  let data = array[draggedIndex];
  let filteredArray = array.filter((item, index) => index !== draggedIndex);
  filteredArray.splice(draggedOverIndex, 0, data);
  return filteredArray;
}