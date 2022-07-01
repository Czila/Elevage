const mongoose = require('mongoose');

const catsSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 15
    },
    sex: {
        type: String,
        enum: ['M', 'F'],
    },
    icad: {
        type: Number,
        maxLength: 15,
    },
    ddn: {
        type: Date,
    },
    loof: {
        type: String,
        maxLength: 17,
    },
    testg: {
        type: String,
    },
    testm: {
        type: String,
    },
    dvac: {
        type: Date,
    },
    dver: {
        type: Date,
    }

});


const Cat = mongoose.model('cat', catsSchema);
module.exports = Cat;






/*
function createCat(name, sex, icad, ddn, loof, testg, testm, dvac, dver) {
    return new Cat({
        name,
        sex,
        icad,
        ddn,
        loof,
        testg,
        testm,
        dvac,
        dver,
    });
}


function save(...cats) {
    cats.forEach(async (p) => await p.save());
}

async function getCat(id) {
    return await Cat.findOne({
        _id: id
    });
}

async function deleteCat(id) {
    await Cat.deleteOne({
        id
    });
    console.log('Deleted successfully the cat');
}
*/


/*
async function updateCat(id, sex, icad, ddn, loof, testg, testm, dvac, dver) {


    const updatedCat = await Cat.findByIdAndUpdate(id, data, {
        new: true,
    });

    console.log(updatedCat);
}
*/
