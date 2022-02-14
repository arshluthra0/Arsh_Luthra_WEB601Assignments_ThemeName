import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movietype'
})
export class MovietypePipe implements PipeTransform {

  transform(movieList: any, type: any) {
    console.log("type", type);
    return movieList.filter((item:any) => item.type == type);
  }

}
