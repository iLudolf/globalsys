export const convertUppercaseToLowercase = (values: any) => {
  if (values) {
    const mySentence: string = values
    const words = mySentence!.split(' ')

    // Preposições que devem ser ignoradas
    const prepos: string[] = [
      'da',
      'do',
      'das',
      'dos',
      'a',
      'ao',
      'e',
      'de',
      'de',
      'o',
    ]

    const palavra = words
      .map((word: string) => {
        for (let i = 0; i <= prepos.length; i++) {
          if (word === prepos[i]) {
            return word
          }
        }

        return !word[0] ? '' : word[0].toUpperCase() + word.substring(1)
      })
      .join(' ')
    return palavra
  }
}
