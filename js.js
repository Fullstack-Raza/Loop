const container = document.querySelector("#container");
for (let i = 1; i < 51; i++) {
  console.log(i);
  const numh1 = document.createElement("h1");
  numh1.textContent = i ;
  container.append(numh1);
}
