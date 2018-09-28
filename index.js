const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(require('./schema.json'));

const data = {
    firstName: 'df',
    lastName: 'aadwawd',
    age: 25, 
    email: 'something@gmail.com',
    interests: ['technologies', 'audio', 'games'],
    address: {
        country: 'USA',
        zipCode: '012',
        city: 'Atlanta',
    }, 
}; 

isValid(data);

function isValid(data) {
    if (!validate(data)) {
        console.log(`${validate.errors[0].dataPath} ${validate.errors[0].message}`);
    }
};
