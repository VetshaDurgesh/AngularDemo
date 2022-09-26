import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gt'
})
export class GtPipe implements PipeTransform {

  transform(value: Number[], arg: Number): Number[] {
    let res: Number[] = [];
    // value.forEach(x => {
    //   if (x > arg) {
    //     res.push(x);
    //   }
    // });
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      if (element>arg) {
        res.push(element);
      }
    }
    return res;
  }

}
