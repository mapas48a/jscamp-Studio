import {test,describe,before,after} from 'node:test'
import assert from 'node:assert' // es para comprobar valores y ejecutarlos...
import {expect, test} from 'bun:test'
import { initServer } from '.'

let calcul

// before es para iniciar todo los procesos y servicios antes de todo.
before(
  async () => new Promise((resolve,reject) =>{
    initServer()
    resolve()
  })
)

// Esto es para cerrar todo los procesos y servicios antes de todo.
after(
  async () => new Promise((resolve,reject) =>{
    initServer(()=>{
      console.log("server esta apagado ahora lol.")
      resolve()
    })
  })
)

// es para el nombre del test
describe('Probar si suma',()=>{
  test('Debe sumar los valores correctamente ej. 1+1 = 2', async ()=>{
    const sum = 
  })
})