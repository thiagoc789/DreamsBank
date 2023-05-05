/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function haAspirado_Style(clientAPI) {
    const haAspirado = clientAPI.binding.haAspirado;
    return haAspirado ? 'GreenText' : 'RedText';
}
