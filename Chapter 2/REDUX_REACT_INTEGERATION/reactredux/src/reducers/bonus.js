export function BonusReducer(state = {points : 10},action){
    if(action.type === 'incrementbonus')
    {
        return {points:state.points+1}
    }
    if(action.type === 'incrementbyamount')
    {
        if(action.payload>=100)
        {
            return {points:state.points+1}
        }
    }
    return state;
}