import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'paginationFilter'
})
export class paginationFilter implements PipeTransform {
    transform(value: any, currentPage: number): any {
        return value.filter((item, index) =>
            (index + 1 > currentPage * 6 - 6 && index + 1 <= currentPage * 6)
        )
    }
}