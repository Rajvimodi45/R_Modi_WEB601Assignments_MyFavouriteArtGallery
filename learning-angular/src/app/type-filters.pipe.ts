import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contentList: Content[], filterByThisType?: string): Content[] {
    console.log("filter value: ", filterByThisType);
    return contentList.filter( c => {

      if (filterByThisType) {

        return c.type == filterByThisType;

      } else {

        return !c.type;
        
      }
    });
  }

}
