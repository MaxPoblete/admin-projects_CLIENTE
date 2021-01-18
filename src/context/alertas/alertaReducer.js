import {MOSTAR_ALERTA, OCULTAR_ALERTA } from '../../types' 

export default (state, action) => {

    switch(action.type){
        case MOSTAR_ALERTA:
            return {
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                alerta: null
            }

        default:
             return state;
    }

}