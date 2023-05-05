/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 * 
 */
export default function filtrarAspirantesYDonantes(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var idProducto = clientAPI.evaluateTargetPath('#Page:Nuevo_Proceso/#Control:seleccion_producto/#SelectedValue')

  var containerProxy = clientAPI.getPageProxy().getControl('FormCellContainer0');
  var makePickerProxy = containerProxy.getControl('FormCellListPicker0');
  var idProductoString = "'"+idProducto.toString()+"'"
  dialog.alert(idProductoString)
  var aspirantesFilter ="$filter=id_producto eq " + idProductoString
  dialog.alert(aspirantesFilter)
  
  var specifier = makePickerProxy.getTargetSpecifier();
  specifier.setQueryOptions(aspirantesFilter)
  makePickerProxy.setTargetSpecifier(specifier);



}
