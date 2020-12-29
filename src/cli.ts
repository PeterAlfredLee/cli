import * as yargs from 'yargs'

yargs
  .usage('Usage: $0 <command> [options]')
  .commandDir('./commands')
  .demandCommand()
  .help()
  .version().argv

process.on('uncaughtException', err => {
  console.error(`uncaught exception: ${err}\n`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('unhandled rejection at:', p, 'reason:', reason)
  process.exit(1)
})
