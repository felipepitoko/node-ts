"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roteador = (0, express_1.Router)();
roteador.get('/', (req, res) => {
    res.json({
        mensagem: "Servidor está funcionando"
    });
});
exports.default = roteador;
//# sourceMappingURL=routes.js.map