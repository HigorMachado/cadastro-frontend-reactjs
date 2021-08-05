export function validaFormCadastroUsuario(values, errorFn) {
    let msg;

    if (values.hasOwnProperty('email')) {
        if ((msg = validaCampoEmail(values.email))) {
            errorFn('email', msg);
        }
    }

    if (values.hasOwnProperty('senha')) {
        if ((msg = validaCampoSenha(values.senha))) {
            errorFn('senha', msg);
        }
    }

}

function validaCampoEmail(email) {
    if (!email) {
        return 'Campo obrigatório.';
    }

    const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

    if (!regex.test(email)) {
        return 'E-mail inválido.';
    }

    return '';
}

function validaCampoSenha(senha) {
    if (!senha) {
        return 'Campo obrigatório.';
    }

    return '';
}