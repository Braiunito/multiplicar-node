const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Show in console the multiplication table', opts)
    .command('crear', 'Create in local a multiplication table ', opts)
    .help()
    .argv;

module.exports = {
    argv
}