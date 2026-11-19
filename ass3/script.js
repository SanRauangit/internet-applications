const tbody =document.querySelector('#book-table tbody');
const addButton = document.querySelector('#add-button');

addButton.addEventListener('click',function(){
    const row = document.createElement('tr');
    tbody.appendChild(row);
    showEditRow(row,'','');
    row.querySelector('input').focus();
});

function makeButton(text,onClick){
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    button.addEventListener('click',onClick);
    return button;
}

function makeCell(...content){
    const cell = document.createElement('td');
    cell.append(...content);
    return cell;
}

function showViewRow(row, author, title){
    const editButton = makeButton('Edit', function(){
        showEditRow(row, author, title);
    });
    
    const removeButton = makeButton('Remove', function(){
        row.remove();
    });

    row.replaceChildren(
        makeCell(author),
        makeCell(title),
        makeCell(editButton,' ', removeButton)
    );
}

function showEditRow(row, author, title){
    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.value = author;

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = title;

    function save(){
        const newAuthor = authorInput.value.trim();
        const newTitle = titleInput.value.trim();

        authorInput.classList.toggle('invalid', newAuthor === '');
        titleInput.classList.toggle('invalid', newTitle === '');

        if(newAuthor === ''){
            authorInput.focus();
            return;
        }
        if(newTitle === ''){
            titleInput.focus();
            return;
        }

        showViewRow(row, newAuthor, newTitle);
    }

    function saveOnEnter(event){
        if (event.key === 'Enter'){
            save();
        }
    }

    authorInput.addEventListener('keydown', saveOnEnter);
    titleInput.addEventListener('keydown', saveOnEnter);

    const saveButton = makeButton('Save', save);
    const removeButton = makeButton('Remove', function(){
        row.remove();
    });
    
    row.replaceChildren(
        makeCell(authorInput),
        makeCell(titleInput),
        makeCell(saveButton,' ', removeButton)
    );
}