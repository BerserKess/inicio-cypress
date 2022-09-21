
context('ToDoMVC', () => {
    it('Adicionar nova tarefa', () => {
        //visitar a url escolhida
        cy.visit ("https://todomvc.com/examples/aurelia/")
        //pegar a caixa de texto e escrever nela e depois pressionar enter
        cy.get ("input.new-todo").type(
            'Estudar automação de testes{enter}')    
        // validar / garantir que a lista tenha 1 item
        cy.get("ul.todo-list li").should('have.length', 1)    
    });
});