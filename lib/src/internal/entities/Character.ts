import transliterate from "../transliterate";

export default class Character {
  constructor(
    public readonly id: string,
    public readonly name: string) { }

  get varName(): string {
    return transliterate(this.name.toLowerCase()).replace(" ", "_");
  }

  toRenpyCharacterDefineLine(): string {
    return `define ${this.varName} = Character('${this.name}')`;
  }
}

