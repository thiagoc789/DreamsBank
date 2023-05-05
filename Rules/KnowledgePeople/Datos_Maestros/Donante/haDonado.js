export default function haDonadoText(clientAPI) {
    const haDonado = clientAPI.binding.haDonado;
    return haDonado ? 'Ha Donado: Si' : 'Ha Donado: No';
  }
  