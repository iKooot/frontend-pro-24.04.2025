# HW 9.1

## Сумма зарплат

Дізнатись суму всіх зарплат користувачів:

```js
const conmpany = {
  sales: [
    { name: "Jhon", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Bob", salary: 1200 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
      { name: "Max", salary: 600 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalSales(company) {
  // your awesome code here
}

const total = totalSales(conmpany);
console.log(total);
```

Об'єкт може містити невідому кількість департаментів та співробітників
