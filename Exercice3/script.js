
document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('result');
    const nomInput = document.getElementById('nom');
    const contenuInput = document.getElementById('contenu');
    const addTodoBtn = document.getElementById('addTodo');

    let todos = [];

    // fonction pour afficher les taches
    function displayTodos() {
        todoList.innerHTML = ''; 

        todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `${todo.name}: ${todo.content}<i onclick="deleteTodo(${index})" style="cursor: pointer; margin-left: 10px;">🗑️</i>`;
            todoList.appendChild(todoItem);
        });
    }

    // fonction pour ajouter une tache
    function addTodo() {
        const name = nomInput.value.trim();
        const content = contenuInput.value.trim();

        if (name === '' || content === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        todos.push({ name , content });

        nomInput.value = '';
        contenuInput.value = '';

        displayTodos();
    }

    // fonction pour supprimer une tache
    window.deleteTodo = function (index) {
        todos.splice(index, 1); 
        displayTodos(); 
    };

    //ajouter une tache revient a cliquer sur le bouton
    addTodoBtn.addEventListener('click', addTodo);
});
