const initialState = {
    allProducts: [
        {name: 'Самса тандырная', price: 60, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjl-EDRo92wTJRObOzB9BICFHtC8Iht82VhDr0pldS6f2h4Yx&s'},
        {name: 'Самса слоеное', price: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbROjseJb4-rGpLyD3g7tT3mThJDBdu-YmWXIC40GjGfD_gUttig&sва'},
        {name: 'Плов', price: 300, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sX-qROBAjjpCYgMXd_iKG6MC9h8BNCXh8pc9VQYsmYBoKMWXjg&s'},
        {name: 'Пирожки печеные', price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pFDeeGbeGFWe4qQkd9E0p0khEwPVBO9daEvF-9EunQfZKAjt&s'},
    ]
};

const productsReducer = (state = initialState, action) => {
    return state;
};

export default productsReducer;
