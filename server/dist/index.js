"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("config"));
const posts_1 = __importDefault(require("./routes/posts"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '30mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '30mb', extended: true }));
app.use((0, cors_1.default)());
app.use('/posts', posts_1.default);
const PORT = process.env.PORT || 5000;
(0, mongoose_1.connect)(config_1.default.get('mongoURI'))
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(err => {
    console.log(config_1.default.get('mongoURI'));
    console.log('Connection error:', err.message);
});
