let a = [1, 2, 3]

for (let i = 0; i < a.length; i++) {
  if (a[i] === 2) {
    a.splice(i, 1)

  }
  console.log(a[i])
}
console.log(a)

