import './css/styles.css'

interface World {
  greeting: string
}

export class Hello {
  world: World

  constructor() {
    this.world = {
      greeting: 'Hello world! 🚀',
    }
  }

  greeting = () => this.world.greeting
}

const hello = new Hello()

console.log(hello.greeting())
