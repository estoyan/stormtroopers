import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'sumPipe'
})

export class SumPipe implements PipeTransform {
    transform(value: number[], propsToSum: string): number {
        let sum = 0;
        value.forEach((x: any) => sum += x[propsToSum]);
        return sum;
    }
}