
document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('result');
    const nomInput = document.getElementById('nom');
    const contenuInput = document.getElementById('contenu');
    const addTodoBtn = document.getElementById('addTodo');

    let todos = [];

    // Fonction pour afficher les tâches
    function displayTodos() {
        todoList.innerHTML = ''; 

        todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `
                <strong>${todo.name}</strong>: ${todo.content}
                <i onclick="deleteTodo(${index})" style="cursor: pointer; margin-left: 10px;">🗑️</i>
            `;
            todoList.appendChild(todoItem);
        });
    }

    // Fonction pour ajouter une tâche
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

    // Fonction pour supprimer une tâche
    window.deleteTodo = function (index) {
        todos.splice(index, 1); // Supprimer la tâche du tableau
        displayTodos(); // Mettre à jour l'affichage
    };

    // Événement pour ajouter une tâche
    addTodoBtn.addEventListener('click', addTodo);
});
