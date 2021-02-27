import { CartItem } from '../models/cart.item.model';
import { Cart } from '../models/cart.model';

export class CartUtil {
    public static get(): Cart {

        // recupera os dados do localStorage
        const data = localStorage.getItem('petshopcart');

        // caso não aja dados retorna um novo carrinho
        if (!data) {
            return new Cart();
        }
        // caso aja dados retorna o carrinho
        return JSON.parse(data);
    }

    // tslint:disable-next-line:variable-name
    public static add(_id: string, product: string, quantity: number, price: number, image: string) {

        // obtém o carrinho
        const cart = this.get();
        console.log(cart);

        // gera o novo item
        const item = new CartItem(_id, product, quantity, price, image);

        // adiciona ao carrinho
        cart.items.push(item);

        // salva no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static update(cart: Cart) {

        // salva no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem('petshopcart');
    }

}
