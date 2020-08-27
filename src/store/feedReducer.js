const GET_ITEMS = 'GET_ITEMS';
let initialState = {
    feeds: [
        {
            id: '1', size: '0,5', service: 'с Фуа-Гра', portion: '10  порций', gift: 'мышь  в подарок', onStore: '5'
            , lowMsgDef: 'Чего сидишь? Порадуй котэ,', lowMsgSelected: 'Печень утки разварная с артишоками.',
            lowMsgDisable:'Печалька, с фуа-гра закончился.'
        },
        {
            id: '2', size: '2', service: 'с рыбой', portion: '40  порций', gift: '2 мыши  в подарок', onStore: '5'
            , lowMsgDef: 'Чего сидишь? Порадуй котэ,', lowMsgSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            lowMsgDisable:'Печалька, с рыбой закончился.'
        },
        {
            id: '3', size: '5', service: 'с курой', portion: '100  порций', gift: '5 мышей  в подарок' + `\n` +
                'заказчик доволен', onStore: '5'
            , lowMsgDef: 'Чего сидишь? Порадуй котэ,', lowMsgSelected: 'Филе из цыплят с трюфелями в бульоне.',
            lowMsgDisable:'Печалька, с курой закончился.'
        }
    ]
};
const feedReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ITEMS:
            let stateCopy = {...state};
            stateCopy.feeds = [...state.feeds];
            stateCopy.feeds[action.elementId].onStore = stateCopy.feeds[action.elementId].onStore - 1;
            return stateCopy;

        default:
            return state;

    }
}
export const dispatchMinCounter = (elementId) => {
    return ({type:GET_ITEMS, elementId})
}
export default feedReducer;
