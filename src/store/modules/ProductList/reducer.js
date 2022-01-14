import Barussi_HeavyFist from '../../../assets/Barussi_HeavyFist.png';
import Bella_ThornRose from '../../../assets/Bella_ThornRose.png';
import Ulisses_DeathDance from '../../../assets/Ulisses_DeathDance.png';
import Dimitry_WarTank from '../../../assets/Dimitry_WarTank.png';
import Wonakashi_CalmLotus from '../../../assets/Wonakashi_CalmLotus.png';

const initialState = [
    {id: 1, image: Barussi_HeavyFist, str: 100, exp: 10},
    {id: 2,  image: Bella_ThornRose,  str: 102, exp: 20},
    {id: 3,  image: Ulisses_DeathDance,  str: 103, exp: 30},
    {id: 4,  image: Dimitry_WarTank,  str: 104, exp: 40},
    {id: 5, image: Wonakashi_CalmLotus,  str: 105, exp: 50},
]

export const productReducer = (state = initialState, action) => {
    return state;
}