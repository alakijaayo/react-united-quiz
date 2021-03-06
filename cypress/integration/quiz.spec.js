describe('Quiz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should welcome the player to the quiz', () => {
    cy.contains('Welcome to the Manchester United Quiz')
  })

  it('gives the player the rules pt.1', () => {
    cy.contains('A quiz for the true United fans.')
  })

  it('gives the player the rules pt.2', () => {
    cy.contains('The rules of the game are simple,')
  })

  it('gives the player the rules pt.3', () => {
    cy.contains('Choose your level and answer 25 questions')
  })

  it('gives the player the rules pt.4', () => {
    cy.contains('About the greatest club in the world!')
  })

  it('gives the player the rules pt.5', () => {
    cy.contains('Show your knowledge about the Red Devils!!')
  })

  it('should ask the player to choose a level', () => {
    cy.contains('Please choose the Level you wish to play:')
  })

  it('renders the initial score', () => {
    cy.contains('Score: 0/25')
  })

  it('renders the initial question number', () => {
    cy.contains('Question: 0/25')
  })

  it('sets the first question to one once player starts', () => {
    cy.get('a.hard').click()
    cy.contains('Question: 1/25')
  })

  it('answers the qustion correctly', () => {
   cy.get('a.medium').click()
   cy.get('[data-cy=correct]').click()
   cy.contains('Score: 1/25')
  })

  it('takes the user to the next question', () => {
    cy.get('a.hard').click()
    cy.get('[data-cy=correct]').click()
    cy.get('[data-cy=submit]').click()
    cy.contains('Question: 2/25')
  })

  it('resets the question number when player clicks home', () => {
    cy.get('a.medium').click()
    cy.get('[data-cy=correct]').click()
    cy.get('[data-cy=submit]').click()
    cy.get('a.home').click()
    cy.contains('Question: 0/25')
  })

  it('resets the score when player clicks home', () => {
    cy.get('a.hard').click()
    cy.get('[data-cy=correct]').click()
    cy.get('[data-cy=submit]').click()
    cy.get('a.home').click()
    cy.contains('Question: 0/25')
  })

})
