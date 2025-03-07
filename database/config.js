
const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            // Las siguientes opciones están comentadas porque son opciones 
            // obsoletas en versiones recientes de Mongoose
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            
            // Agregar estas opciones podría ayudar con problemas de conexión
            serverSelectionTimeoutMS: 30000, // Aumentar timeout 
            heartbeatFrequencyMS: 2000,     // Latidos más frecuentes
            retryWrites: true,              // Reintentar escrituras
            retryReads: true                // Reintentar lecturas
        });

        console.log('DB Online');

    } catch (error) {
        console.error('Error detallado de conexión:', error);
        throw new Error('Error al inicializar BD');
    }
};

module.exports = {
    dbConnection
};