const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'make':
        let task = todo.make(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = todo.getList();
        for (let task of list) {
            console.log('==============='.green);
            console.log(task.description);
            console.log('status:', task.completed);
            console.log('==============='.green);
        }

        break;
    case 'update':
        let update = todo.update(argv.description, argv.completed);
        console.log(update);
        break;
    case 'erase':
        let erase = todo.erase(argv.description);
        console.log(erase);
        break;
    default:
        console.log('unrecognized command');
}