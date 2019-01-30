import { Pipe, PipeTransform } from '@angular/core';

/**
 * STRING-FILTER PIPE
 * Filtra un string
 */

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

  transform(list: any[], filterBy: string | null): any[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return list.filter((item) =>
        Object.keys(item).some(prop => {
          let value = item[prop];
          if (typeof value === "string") {
            value = value.toLocaleLowerCase();
          }
          return value.toString().indexOf(filterBy) !== -1;
        })
      );
    } else {
      return list;
    }
  }
}
