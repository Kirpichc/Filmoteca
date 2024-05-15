import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse'

})

export class ReversePipe implements PipeTransform{
    transform(value: Array<any>, options:{isAddingPointInTheEnd: boolean, isAddingTwoPointInTheEnd: boolean}) {
        console.log(options)
        if (!value) return;

        if(options.isAddingPointInTheEnd){
            value = value.map(item => item+ " первий ")
        }
        if(options.isAddingTwoPointInTheEnd){
            value = value.map(item => item+ " плюс второй параметр")
        }

        return value.reverse();
    }
}