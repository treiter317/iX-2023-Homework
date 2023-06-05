class Task {
    constructor(taskName, complete){
        this.taskName = taskName;
        this.complete = complete;
    }

    getTaskName(){
        return this.taskName;
    } 

    static fromJSON(json) {
        return new Task(json.taskName, json.complete);
      }
}

class UI {
    
    constructor(){
        this.form = document.getElementById('form');

        this.taskName = document.getElementById('task');

        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) => this.onButtonClick(e));

        this.tasks = [];

        this.loadTasksFromLocalStorage();
        this.showTable();
    }

    onButtonClick(e) {
        e.preventDefault();

        if(this.taskName.value == '') {
            return;
        } 

        const curTask = new Task(this.taskName.value, false);

        this.tasks.push(curTask);
        
        this.showTable();

        this.taskName.value = '';
    }

    showTable() {
        this.tableBody.innerHTML = '';

        for(let i = 0;i < this.tasks.length;i++) {
            const tempTask = this.tasks[i];

            const tr = this.addTask(tempTask);
            this.tableBody.appendChild(tr);
        }
        this.saveTasksToLocalStorage();
        this.loadTasksFromLocalStorage();
    }

    addTask(task) {
        const tr = document.createElement('tr');

        const name = document.createElement('td');
        const complete = document.createElement('td');
        const delButton = document.createElement('td');

        name.innerHTML = task.getTaskName();

        const radioBox = document.createElement('input');
        radioBox.setAttribute('type', 'radio');
        radioBox.addEventListener('click', () => {
            this.tasks[this.findTaskInArray(task)].complete = true;
            task.complete = true;
            this.saveTasksToLocalStorage();
        });
        if(task.complete) {
            radioBox.setAttribute('checked', 'checked');
        }
        complete.appendChild(radioBox);

        const button = document.createElement('button');
        button.setAttribute('class', 'btn btn-danger btn-sm');
        button.innerHTML = 'Delete';
        button.addEventListener('click', () =>
            this.onRemoveTaskClicked(task)
        );
        delButton.appendChild(button);

        tr.appendChild(name);
        tr.appendChild(complete);
        tr.appendChild(delButton);

        return tr;
    }

    onRemoveTaskClicked(task) {
        this.tasks = this.tasks.filter((x) => {
            return task.getTaskName() !== x.getTaskName();
        });

        this.saveTasksToLocalStorage();
        this.showTable();
    }

    findTaskInArray(task) {
        for(let i = 0;i < this.tasks.length;i++) {
            if(task.taskName == this.tasks[i].taskName) {
                return i;
            }
        }
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
      }
    
    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
          const taskArr = JSON.parse(json);
          this.tasks = taskArr.map((x) => Task.fromJSON(x));
        }
    }
}

const ui = new UI();


