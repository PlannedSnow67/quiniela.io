const express = require('express');
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        // routes
        this.teamPath = '/api/teams';

        this.middlewares();
        this.database();
        this.routes();
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }

    middlewares() {
        this.app.use(cors()); // CORS
        this.app.use(express.json()); // Read and parse body
    }

    routes() {
        this.app.use(this.teamPath, require('../routes/team.routes'));
    }

    database() {
        require('../models');
        require('../models/association')
    }


}

module.exports = Server;