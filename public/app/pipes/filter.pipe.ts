import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'customFilter' })
export class CustomFilterPipe<T> implements PipeTransform {
    transform<T>(originalList: Array<T>, data: string, props: Array<string>) {
        let filteredList: any[];
        if (data && props && originalList) {
            console.log(data);    
            data = data.toLowerCase();
            let filtered = originalList.filter(item => {
                let match = false;
                for (let prop of props) {
                    if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                };
                return match;
            });
            filteredList = filtered;
        } else {
            filteredList = originalList;
        }
        return filteredList;


    }
}
