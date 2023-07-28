//funcion para poner en mayuscula la primea letra de la palabra

export function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}