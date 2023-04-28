/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function generar_aleatorio(clientAPI) {
    var aleatorio = Math.floor((Math.random() * (9999999999999- 100000000 + 1)) + 100000000);
    return aleatorio.toString();
}
