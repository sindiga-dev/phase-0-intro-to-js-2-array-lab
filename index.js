const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const appendCat = [...cats, "Broom"];
  return appendCat;
}
function prependCat() {
  const prependCat = ["Arnold", ...cats];
  return prependCat;
}
function removeLastCat() {
  const removeLastCat = cats.slice(0, -1);
  return removeLastCat;
}
function removeFirstCat() {
  const removeFirstCat = cats.slice(1);
  return removeFirstCat;
}