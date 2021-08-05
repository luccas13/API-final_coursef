const dbPath = process.env.DB_PATH
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

module.exports = {
    dbPath, mongooseOptions
}