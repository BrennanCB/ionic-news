import { Pipe, PipeTransform } from '@angular/core';
import { SourceInterface } from '../../pages/sources/models/source.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(sources: SourceInterface[], term: string): any {
    console.log(sources);
    console.log(term);

    if (term === '') {
      return sources;
    }

    return sources.filter(source => source.name.toLowerCase().includes(term.toLowerCase()));
  }
}
