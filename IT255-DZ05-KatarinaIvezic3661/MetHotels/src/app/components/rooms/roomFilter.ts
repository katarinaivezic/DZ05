import { Pipe, PipeTransform } from '@angular/core';
import { Room } from 'src/app/modules/Room';

@Pipe({ name: 'filterByUP', pure: false })
export class FilterByUserPrice implements PipeTransform {
    transform(rooms: Room[], userPrice: any): Room[] {
        


        
        const resultArray = [];
        if (rooms.length === 0 || userPrice == '') {
            return rooms;
        }


        for (const item of rooms) {
            if (item.price <= Number(userPrice)) {
                resultArray.push(item);
            }
        }

        return resultArray;

    }
} 