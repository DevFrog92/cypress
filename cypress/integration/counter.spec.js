describe("example counter app", () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it("최초의 카운터 값을 0으로 보여준다.", () => {
    cy.get('#value').invoke("text").should("eq", "0")
  })

  it("+ 버튼을 클릭시 카운터를 1 증가한다.",() => {
    // 먼저 기존 값을 가져오고,

    cy.get(".increase-btn").click()
  })
})
