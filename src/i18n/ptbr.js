export default {
    app: { name: "Restaurante" },
    landing: {
        title: "As melhores refeições da cidade",
        subtitle: "Peça on-line!"
    },

    todayOptions: [
        { "name": "Bife acebolado", "price": 4.50 },
        { "name": "Bisteca Suína", "price": 4.50 },
        { "name": "Filé de frango grelhado", "price": 4.50 },
        { "name": "Filé de frango milanesa", "price": 4.50 },
        { "name": "Filé de peixe escabeche", "price": 4.50 },
        { "name": "Bife ao molho", "price": 4.50 }
    ],

    add: [
        { "name": "Feijão mulatinho", "price": 1.50 },
        { "name": "Feijão macassar", "price": 1.50 },
        { "name": "Arroz", "price": 1.50 },
        { "name": "Macarrão", "price": 1.50 },
        { "name": "Legumes", "price": 1.50 },
        { "name": "Maionese", "price": 1.50 }
    ],

    footer: {
        name: `Restaurante - ${(new Date()).getFullYear()}`
    }
}