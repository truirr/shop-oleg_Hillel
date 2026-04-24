function AboutPage() {
  return (
    <section className="about">
      <h1>О проекте</h1>
      <p>
        Цей проєкт створено як курсова робота з React та Redux Toolkit.
        Додаток імітує інтернет-магазин техніки.
      </p>

      <div className="about-card">
        <h2>Що реалізовано</h2>
        <ul>
          <li>React-проєкт через Vite</li>
          <li>Маршрутизація через React Router</li>
          <li>Redux Toolkit store</li>
          <li>Slice для товарів</li>
          <li>Slice для кошика</li>
          <li>Додавання, видалення та зміна кількості товарів</li>
          <li>Пошук товарів</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;