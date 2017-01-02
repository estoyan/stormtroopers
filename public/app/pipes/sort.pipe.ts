import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customSort' })
export class CustomSortPipe<T> implements PipeTransform {
    transform<T>(value: T[], filter: string) {
        if (!value || !value.sort) {
            return value;
        }
        let temp = filter.split(' ');
        let filterCriteria = temp[0];
        let isAscending = temp[1];

        let result = value.sort((a: T, b: T) => {
            if (a[filterCriteria] < b[filterCriteria]) { return -1; }
            if (a[filterCriteria] > b[filterCriteria]) { return 1; }
            return 0;
        });
        if (isAscending === 'true') {
            return result;
        } else {
            return result.reverse();
        }
    }
}
