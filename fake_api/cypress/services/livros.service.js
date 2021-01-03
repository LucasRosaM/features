import Rest from './_rest.service'

let url = ''

export default class Livros extends Rest {
    static get_all_books(){
        url = 'Books';
        return super.get(`${url}`);
    }

    static post_book(body){
        url = 'Books';
        return super.post(url, body);
    }

    static delete_by_id(id){
        url = 'Books';
        return super.delete(`${url}/${id}`);
    }
}