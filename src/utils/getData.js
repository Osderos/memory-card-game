async function getData(param) {
  let charsPool = [];
  for (let i = 1; i <= param; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
        mode: "cors",
      });
      const data = await response.json();
      const caracter = {
        id: data.id,
        name: data.name,
        imgURL: data.sprites.front_shiny,
      };
      charsPool.push(caracter);
    } catch (err) {
      console.log(err);
    }
  }

  return charsPool;
}

export { getData };
