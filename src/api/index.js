import { root } from './config.js';

export const api = Object.freeze({
  starships: {
    fetch: () => {
      return fetch(`${root}/starships`, {
        method: 'GET'
      })
    }
  },
  planets: {
    fetch: () => {
      return fetch(`${root}/planets`, {
        method: 'GET'
      })
    }
  },
  people: {
    fetch: () => {
      return fetch(`${root}/people`, {
        method: 'GET'
      })
    }
  },
  person: {
    fetch: (id) => {
      return fetch(`${root}/people/${id}`, {
        method: 'GET'
      })
    }
  }

});