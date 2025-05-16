
let tasksAdded = [];

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addTask() {
  return new Promise(resolve => {
    readline.question('Enter the Task Title ', (task) => {
      tasksAdded.push({
        description : task,
        completed : false,
      });
      console.log(`Task "${task}" added to the list.`);
      resolve(); 
    });
  });
}


async function viewAllTask(){
  if(tasksAdded.length === 0){
    console.log('There are no existing tasks in the List');
  }
  else{
    console.log('List of task: ');
    tasksAdded.forEach((task, index) => {
      const status = task.completed ? '[Completed]' :'[Pending]';
      console.log(`${index + 1}. ${task.description} ${status}`);
    })
  }
}

function markTaskAsComplete() {
  return new Promise((resolve) => {
    readline.question(
      'Please enter the num of the task you want to mark as completed: ',(taskNumber) => {
        const index = parseInt(taskNumber) - 1; 

        if (index >= 0 && index < tasksAdded.length) {
          if (!tasksAdded[index].completed) {
            tasksAdded[index].completed = true;
            console.log(`Task "${tasksAdded[index].description}" is marked as completed.`);
          } 
          else {
            console.log(`Task "${tasksAdded[index].description}" was already completed.`);
          }
        } 
        else {
          console.log('Error: This task does not exist!');
        }
        resolve();
      }
    );
  });
}

function deleteTask() {
    return new Promise(resolve => {
        readline.question(
            'Please enter the number of the task you want to delete: ',
            (taskNumber) => {
                const index = parseInt(taskNumber) - 1;

                if (index >= 0 && index < tasksAdded.length) {
                    const deletedTask = tasksAdded.splice(index, 1)[0]; 
                    console.log(`Task "${deletedTask.description}" deleted.`);
                    console.log("List of task updated: ", tasksAdded);

                } else {
                    console.log('Error: This task does not exist');
                }
                resolve();
            }
        );
    });
}

async function actionOptions() {

console.log('\nWELCOME TO THE To-Do List APP!');
console.log('1. Add a Task\n' +
            '2. View all Task\n' +
            '3. Mark Task as Complete\n' +
            '4. Delete a Task\n' +
            '5. Exit');

readline.question('Choose an Option: ', async input => {

    if(input == '1'){
        await addTask();
        actionOptions();
    }

    else if(input == '2'){
        await viewAllTask();
        actionOptions();
    }

    else if(input == '3'){
        await markTaskAsComplete();
        actionOptions();
    }

    else if (input === '4'){
      await deleteTask();
      actionOptions();
    }

    else if (input === '5'){
        console.log('Good Bye! :)')
        readline.close();
    }

    else{
        console.log('Invalid option, please select one option from the menu');
        actionOptions();
    }
    

    });

}

actionOptions()