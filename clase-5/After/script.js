class Pokemon {
    constructor(nombre, tipo, vidas, ataque) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidas = vidas;
        this.ataque = ataque;
        this.nivel = 1
    }

    saludar() { 
        // '' == "" != ``
                
        console.log('El pokemon ' + this.nombre +' esta saludando!')
        console.log(`El pokemon ${this.nombre} esta saludando!`)
    }

    combatir(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} esta atacando al pokemon ${pokemonAtacado.nombre} con un daño de ${this.ataque}`)
        pokemonAtacado.restarVida(this.ataque)
    }

    restarVida(ataque) {
        this.vida -= ataque //this.vida = this.vida - ataque
        if(this.vida <= 0) {
            console.log(`El pokemon ${this.nombre} se fue a dormir con los Magicarps`)
        } else {
            console.log(`El pokemon ${this.nombre} sigue en combate`)
        }
    }
}
let nombre
do {
    nombre = prompt("Ingrese un nombre")
} while(nombre == "")


const pokemon1 = new Pokemon(nombre, "Electrico", 10, 5)
const pokemon2 = new Pokemon("Fueguito", "Fuego", 12, 6)

pokemon1.saludar()
do {
    pokemon2.combatir(pokemon1)
    pokemon1.combatir(pokemon2)
} while(pokemon1.vida > 0 || pokemon2.vida > 0)
