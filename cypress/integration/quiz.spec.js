describe('Quiz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should welcome the player to the quiz', () => {
    cy.contains('Welcome to the Manchester United Quiz')
  })

  it('should ask the player to choose a level', () => {
    cy.contains('Please choose the Level you wish to play:')
  })
})
