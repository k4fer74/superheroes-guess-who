const heroes = [{
  "id": 1,
  "name": "Batman",
  "color": "#333333",
  "avatar": "avatars/02.svg",
  "hints": [1, 2]
}, {
  "id": 2,
  "name": "Superman",
  "color": "#dd4b39",
  "avatar": "avatars/01.svg",
  "hints": [1]
}]

export default {
  getAllHeroes() {
    return heroes
  }
}
