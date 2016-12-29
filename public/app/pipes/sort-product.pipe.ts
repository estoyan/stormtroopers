import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product.model';

@Pipe({ name: 'customSort' })
export class CustomSortPipe<T> implements PipeTransform {
    transform<T>(value: T[], filterCriteria: string, sortBy?: string) {
        if (!value || !value.sort) {
            return value;
        }
        var result=value.sort((a: T, b: T) => {
                if (a[filterCriteria] < b[filterCriteria]) { return -1; }
                if (a[filterCriteria] > b[filterCriteria]) { return 1; }
                return 0;
            });
        if (sortBy === 'desc') {
            return result.reverse();
        } else {
            return result;
        }

    }
}