import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'length' })
export class LengthPipe implements PipeTransform {
    transform(value: Array<any>, args: any[] = null): any {
        return value.map(t => {
            return {
                item: t,
                parent: value
            };
        });
    }
}
