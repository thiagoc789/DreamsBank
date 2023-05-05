export default function haDonadoText(clientAPI) {
    const haAspirado = clientAPI.binding.haAspirado;
    return haAspirado ? 'Ha Aspirado: Si' : 'Ha Aspirado: No';
  }
  