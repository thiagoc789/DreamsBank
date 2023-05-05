export default function estilo_haDonado(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    const haDonado = clientAPI.binding.haDonado;
    return haDonado ? 'GreenText' : 'RedText';
  }
  