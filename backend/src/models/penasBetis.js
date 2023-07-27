import connection from '../db/mongoose.js';

const penasBetisSchema = new connection.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    strict: false
});

const PenasBetis = connection.model('PenasBetis', penasBetisSchema);

export default PenasBetis;