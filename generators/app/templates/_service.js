var seneca = require('seneca')()

seneca.use('msgstats', {
  collect: true,
  interval: 500,
  influx:{
    host: 'localhost',
    port: '8086',
    username: 'msgstats',
    password: 'msgstats',
    database: 'seneca_msgstats'
  }
})