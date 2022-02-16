const { Schema, model} = require('mongoose');

const celebritySchema = new Schema({
  name: String ,
  occupation: String ,
  catchPhrase: { 
      type: String,
      default: "unknown"
    }
});

const Celebrity = model("Celebrity", celebritySchema)

module.exports = Celebrity;