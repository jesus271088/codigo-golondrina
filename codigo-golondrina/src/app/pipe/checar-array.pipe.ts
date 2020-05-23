
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checarArrayPipe'
})
export class ChecarArrayPipe implements PipeTransform {

  transform(value: any, exponent: any): boolean {
    let result = value.indexOf(exponent);
    return result > -1;
  }

}


