import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const inputUser = readline.createInterface({input,output})

const opSoportadas:string[] = [
  'suma',
  'resta',
  'division',
  'multiplicacion',
  'modulo',
  'potencia'
]

class Operations{
  static operationValue:'suma'|
  'resta'|
  'division'|
  'multiplicacion'|
  'modulo'|
  'potencia'
  
  static operation(){
    for ( of opSoportadas){

    }
  }
}



export async function initServer(callback?:()=> void){
  console.log("queseyo pero vamos a hacerlo como quiera")
  callback
}

while(true){
  console.log('Escribe que operaciones quieres usar ej. 1,2 or ...')
  opSoportadas.forEach((value,index)=>{
    console.log(`${index + 1}-${value}`)
  })
  try {
    const option = await inputUser.question('Seleciona tu opcion: ')
    console.log(option)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}