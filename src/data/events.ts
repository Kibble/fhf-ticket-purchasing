import FunnyGirl from '../images/funnyGirl.jpg';
import MJ from '../images/mj.jpg';
import NorthCountry from '../images/northCountry.png';

import type { Event } from '../components/types';

export const events: Array<Event> = [
    {
        title: 'MJ the Musical',
        date: 'Oct 10, 2:00PM',
        image: MJ,
        price: 229,
    },
    {
        title: 'Funny Girl',
        date: 'Nov 11, 2:00PM',
        image: FunnyGirl,
        price: 229,
    },
    {
        title: 'Girl from the North Country',
        date: 'Jan 6, 2:00PM',
        image: NorthCountry,
        price: 229,
    }
];