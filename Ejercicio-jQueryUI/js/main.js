$(document).ready(()=>{
    
    //Mover elemento por la pagina
    $('.elemento').draggable();
    
    //Redimensionar un elemento
    $('.elemento').resizable();

    //Seleccionar muchos archivos (cambio de colores ej)
    $('.lista-seleccionable').dblclick(()=>{
        $('.lista-seleccionable').selectable();
    })
    
    //Mover los li de la lista como el usuario prefiera (los ordena)
    $('.lista-seleccionable-movibles').sortable({
        update:function(event, ui){
            console.log('Ha cambiado el orden de la lista');
        }
    });

    //Dropp => cuando yo superponga el elemento dentro del otro elemento:
    //1) Para que se pueda mover
    $('#elemento-movido').draggable(); 
    //2) Para que al ponerse el otro elemento dentro de este se haga un evento
    $('#area').droppable({
        drop:function(){
            console.log('Haz soltado algo dentro del área');
        }
    }); 

    //EFECTOS:
    $('#boton1').click(()=>{
        $('#caja-efectos1').toggle('slide',1500)
    })

    $('#boton2').click(()=>{
        $('#caja-efectos2').toggle('drop')
    })

    $('#boton3').click(()=>{
        $('#caja-efectos3').toggle('blind')
    })
    
    $('#boton4').click(()=>{
        $('#caja-efectos4').toggle('explode')
    })

    $('#boton5').click(()=>{
        $('#caja-efectos5').toggle('fold')
    })

    $('#boton6').click(()=>{
        $('#caja-efectos6').toggle('puff')
    })

    $('#boton7').click(()=>{
        $('#caja-efectos7').toggle('shake',2500)
    })

    // Tooltip: para todos los elementos que tengan un title se le agregue un tooltip que seria que se muestre el contenido que hay en el title

    $(document).tooltip();
    $('a').css('margin-left','40px')
          .css('fontSize','19px');

    // Cuadros de dialogo: Dialog      
    $('#boton-Dialog').click(()=>{
        $('#div-Dialog').dialog()
    })

    //Calendario: Datepicker
    $('#calendario').datepicker();

    //Pestañas cambiables
    $('#pestanas').tabs()
                  .css('width','650px');
})