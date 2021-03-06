# tingoDOWN

A drop-in replacement for
[LevelDOWN](https://github.com/rvagg/node-leveldown) that runs on
TingoDB. Can be used as a back-end for
[LevelUP](https://github.com/rvagg/node-levelup) rather than an actual
LevelDB store.

<!-- [![Build Status](https://travis-ci.org/watson/mongodown.png)](https://travis-ci.org/watson/mongodown) -->

## Installation

```
npm install tingodown
```

## Example

```javascript
var levelup = require('levelup')
var tingodown = require('tingodown')

// TingoDB Collection name defaults to 'tingodown'
var db = levelup(tingodown('tingodb:///home/my-database'))

// OR pass custom TingoDB collection name
db = levelup(tingodown('tingodb:///home/my-database'), { collection:'People_C' })

db.put('name', 'Yuri Irsenovich Kim')
db.put('dob', '16 February 1941')
db.put('spouse', 'Kim Young-sook')
db.put('occupation', 'Clown')

db.readStream()
  .on('data', console.log)
  .on('close', function () { console.log('Show\'s over folks!') })
```

## Limitations

tingoDOWN does not support iterator snapshots

## License

MIT
