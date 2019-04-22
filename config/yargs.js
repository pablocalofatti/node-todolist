const description = {
    demand: true,
    alias: 'd',
    description: 'description of the to-do task'
}
const completed = {
    default: true,
    alias: 'c',
    description: 'mark as completed or pending a task'
}
const erase = {
    default: true,
    alias: 'e',
    description: 'erase a task'
}

const argv = require('yargs')
    .command('make', 'make a to-do element', { description })
    .command('update', 'update the completed status of the task', { description, completed })
    .command('erase', 'erase a task', { description, erase })
    .help()
    .argv;

module.exports = {
    argv
}