//3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
    {
        nome: 'gialli',
        puntiFatti: 0,
        falliSubiti: 0,

    },
     
    {
        nome: 'rossi',
        puntiFatti: 0,
        falliSubiti: 0,

    },

    {
        nome: 'verdi',
        puntiFatti: 0,
        falliSubiti: 0,

    },

    {
        nome: 'blu',
        puntiFatti: 0,
        falliSubiti: 0,

    },

];


for (const key in teams) {
    (teams[key].puntiFatti) = Math.floor(Math.random() * 100) + 1;
    (teams[key].falliSubiti) = Math.floor(Math.random() * 100) + 1;
}

console.log(teams);