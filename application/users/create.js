const status = require("http-status");
const insertUserDB = require("../../interfaces/users/data-access/create");

const createUser = async ({name, cpf, address, res}) => {
    try {
        while(cpf.indexOf(".") > 0 || cpf.indexOf("-") > 0) {
            cpf = cpf.replace(".", "")
            cpf = cpf.replace("-", "")
        } 

        if (Number(cpf)) {
            if (cpf?.length > 11 || cpf?.length < 11) {
                res.status(status.INTERNAL_SERVER_ERROR).send("erro no tamanho do cpf")
                return;
            }

        } else {
            res.status(status.INTERNAL_SERVER_ERROR).send("digite apenas numeros")
            return;
        }

        let cpfFirstDig = 0;
        // autenticação cpf: 
        for (i = 0; i < 9; i++){
            cpfFirstDig += cpf[8-i] * (i+2);           
        }
        cpfFirstDig = (cpfFirstDig % 11);

        if (cpfFirstDig < 2){
            if (cpf[9] == cpfFirstDig){
                console.log("o digito esta correto")
            }
        } else {
            if (cpf[9] == (11 - cpfFirstDig)){
                console.log("o digito esta correto")
            } else {
                res.status(status.INTERNAL_SERVER_ERROR).send("este cpf não é valido")
                return;
            }
        }

        let cpfSecDig = 0;
        for (i = 0; i < 10; i++){
            cpfSecDig += cpf[9-i] * (i+2);           
        }
        cpfSecDig = (cpfSecDig % 11);   

        if (cpfSecDig < 2){
            if (cpf[10] == cpfSecDig){
                console.log("o digito esta correto")
            }
        } else {
            if (cpf[10] == (11 - cpfSecDig)){
                console.log("o digito esta correto")
            } else {
                res.status(status.INTERNAL_SERVER_ERROR).send("este cpf não é valido")
                return;
            }
        }      
        
        // validação do name
        if (name == "" || address == ""){
            res.status(status.INTERNAL_SERVER_ERROR).send("campo vazio")
            return;           
        }
        
        insertUserDB({name, cpf, address, res});

    } catch (err ) {
        console.log("error", err);
        res.status(status.INTERNAL_SERVER_ERROR).send(err)
    }
}

module.exports = createUser;