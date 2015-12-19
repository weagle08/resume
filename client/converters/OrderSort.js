/**
 * Created by weagl on 12/18/2015.
 */
export class OrderSortValueConverter {
    toView(array) {
        return array.slice(0).sort((a,b) =>
        {
            return a.order - b.order;
        });
    }
}