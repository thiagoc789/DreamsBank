/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function generar_aleatorio(clientAPI) {
    var aleatorio = Math.floor((Math.random() * (99999999- 100000 + 1)) + 10000000);
    return aleatorio.toString();
}
