let FANTASTIK = [
    {
        "query": "1984",
        "athor": "Джордж Оруэлл",
        "pages": "+-500 листов А4",
        "age": "16+",
        "classn": "Научная фантастика",
        "images": "js/images/108.jpg"
    },

    {
        "query": "Автостопом по галактике",
        "athor": "Дуглас Адамс",
        "pages": "300-400 листов А4",
        "age": "12+",
        "classn": "Научная фантастика",
        "images": "js/images/109.jpg"
    },

    {
        "query": "Марсианский хроники",
        "athor": "Рэй Брэдбери",
        "pages": "200-300 листов А4",
        "age": "12+",
        "classn": "Научная фантастика",
        "images": "js/images/110.jpg"
    },

    {
        "query": "Солярис",
        "athor": "Станислав Лем",
        "pages": "200-300 листов А4",
        "age": "14+",
        "classn": "Научная фантастика",
        "images": "js/images/111.jpg"
    },

    {
        "query": "Дюна",
        "athor": "Фрэнк Герберт",
        "pages": "400-600 листов А4",
        "age": "14+",
        "classn": "Научная фантастика",
        "images": "js/images/112.jpg"
    },

    {
        "query": "Октябрьская конспирация",
        "athor": "Филип К. Дик",
        "pages": "10-15 листов А4",
        "age": "14+",
        "classn": "Научная фантастика",
        "images": "js/images/113.jpg"
    },

    {
        "query": "Нейромант",
        "athor": "Уильям Гибсон",
        "pages": "300-400 листов А4",
        "age": "16+",
        "classn": "Научная фантастика",
        "images": "js/images/114.jpg"
    },

    {
        "query": "Заводной апельсин",
        "athor": "Энтони Бёрджесс",
        "pages": "250-300 листов А4",
        "age": "16+",
        "classn": "Научная фантастика",
        "images": "js/images/115.jpg"
    },

    {
        "query": "Пикник на обочине",
        "athor": "Стругацкие",
        "pages": "200-250 листов А4",
        "age": "16+",
        "classn": "Научная фантастика",
        "images": "js/images/116.jpg"
    },

    {
        "query": "Роман с монетой",
        "athor": "Джонатан Летем",
        "pages": "200-250 листов А4",
        "age": "16+",
        "classn": "Научная фантастика",
        "images": "js/images/117.jpg"
    },
]

//ROOT
const ROOT_HEADER = document.getElementById("header")
const ROOT_PRODUCTS = document.getElementById("products")
const ROOT_MENU = document.getElementById("js-menu")

//Script for watch books
class Products {

    render() {
        let htmlCatalog = '';

        FANTASTIK.forEach(({ images, query, athor, classn, age, pages }) => {
            
            htmlCatalog += `
                <li class="book-element">    
                    <img class="book-element__image" src="${images}">
                    <span class="book-element__name">${query}</span>

                    <details class="book-element__all"><summary>Подробнее</summary>
                        <option>${athor}</option>
                        <option>${pages}</option>
                        <option>${age}</option>
                        <option>${classn}</option>
                    </details>
                </li>
            `;
        });

        const html = `
            <ul class="booksConteiner">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const ProductsPage = new Products();
ProductsPage.render();