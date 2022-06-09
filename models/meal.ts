class Meal {
  constructor(
    public readonly id: string,
    public readonly categoryIds: string[],
    public readonly title: string,
    public readonly affordability: string,
    public readonly complexity: string,
    public readonly imageUrl: string,
    public readonly duration: number,
    public readonly ingredients: string[],
    public readonly steps: string[],
    public readonly isGlutenFree: boolean,
    public readonly isVegan: boolean,
    public readonly isVegetarian: boolean,
    public readonly isLactoseFree: boolean
  ) {}
}

export default Meal;
