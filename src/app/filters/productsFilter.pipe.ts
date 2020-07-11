import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'productsFilter'
})
export class productsFilter implements PipeTransform {
    transform(value: any, args: string, currentPage: number): any {
        return value.filter((item) =>
            item.title.indexOf(args) !== -1
        )
    }
}