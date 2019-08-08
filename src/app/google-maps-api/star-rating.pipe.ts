import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})

export class StarRatingPipe implements PipeTransform {

  transform(rating: number) {
    if (rating % Math.floor(rating) >= 0.3) {
      return true;
    } else {
      return false;
    }
  }
  
}