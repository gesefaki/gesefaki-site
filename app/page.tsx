import {
  ArrowDownRight,
  ArrowUpRight,
  GitBranch,
  Mail,
  Send,
} from 'lucide-react';

const stack = ['C# / .NET', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'Docker'];

const projects = [
  {
    index: '01',
    title: 'DomainScanner',
    label: 'Мониторинг доменов',
    description:
      'Backend-сервис для хранения доменов, фоновых HTTP-проверок и контроля доступности.',
    tags: ['REST API', 'Hangfire', 'PostgreSQL', 'Redis', 'Docker'],
    href: 'https://github.com/gesefaki/DomainScanner',
    accent: 'project-card--lime',
  },
  {
    index: '02',
    title: 'TicketFlow',
    label: 'Архитектура бронирования',
    description:
      'Модульный монолит с явными бизнес-границами, доменной моделью и CQS.',
    tags: ['.NET 10', 'Modular monolith', 'DDD', 'CQS', 'xUnit'],
    href: 'https://github.com/gesefaki/TicketFlow',
    accent: 'project-card--blue',
  },
];

const services = [
  {
    index: '01',
    title: 'Backend и API',
    text: 'Спроектировать сервис, подключить базу данных, авторизацию, кеш или внешнюю интеграцию.',
  },
  {
    index: '02',
    title: 'Веб-сервисы',
    text: 'Собрать небольшой продукт целиком или добавить нужный функционал в существующий проект.',
  },
  {
    index: '03',
    title: 'Боты и парсеры',
    text: 'Автоматизировать повторяющийся процесс, обработку данных, уведомления или сбор информации.',
  },
  {
    index: '04',
    title: 'Доработка кода',
    text: 'Разобраться в чужом проекте, найти проблему, привести модуль в порядок и подготовить к запуску.',
  },
];

const principles = [
  [
    '01',
    'Понимаю результат',
    'Сначала фиксируем, что именно должно заработать и как это проверить.',
  ],
  [
    '02',
    'Не усложняю',
    'Выбираю архитектуру под реальный масштаб задачи, а не ради количества технологий.',
  ],
  [
    '03',
    'Показываю по этапам',
    'Не прячусь до финального дедлайна — промежуточный результат можно проверить.',
  ],
  [
    '04',
    'Передаю понятно',
    'После работы остаются инструкция, настройки и ясное состояние проекта.',
  ],
];

const questions = [
  {
    question: 'Можно обратиться без готового ТЗ?',
    answer:
      'Да. Достаточно описать своими словами, что должно работать и какой результат нужен. Я помогу разложить идею на понятные части и предложу вариант реализации.',
  },
  {
    question: 'Как определяется стоимость?',
    answer:
      'После короткого обсуждения. Понятные небольшие задачи можно оценить целиком, крупные — разделить на этапы, а диагностику и доработку чужого кода — считать по времени.',
  },
  {
    question: 'Можно доработать уже существующий проект?',
    answer:
      'Да. Сначала посмотрю структуру и текущее состояние, затем обозначу риски, объём и безопасный порядок изменений.',
  },
  {
    question: 'Что останется после завершения?',
    answer:
      'Рабочий результат, исходный код, согласованные настройки и понятная инструкция по запуску. При необходимости отдельно договариваемся о поддержке.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="site-nav" aria-label="Основная навигация">
          <a className="wordmark" href="#top" aria-label="gesefaki — наверх">
            <span className="wordmark-mark">g/</span>
            <span>gesefaki</span>
          </a>

          <div className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#projects">Проекты</a>
            <a href="#approach">Подход</a>
          </div>

          <a
            className="nav-cta"
            href="https://t.me/gesefaki"
            target="_blank"
            rel="noreferrer"
          >
            Обсудить задачу
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </nav>

        <div className="hero-grid page-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Открыт к новым задачам
            </div>

            <h1>
              Собираю IT-задачи
              <span>в работающие системы.</span>
            </h1>

            <p className="hero-lead">
              Backend, веб-сервисы, боты и автоматизация — от идеи или готового
              ТЗ до запуска и понятной инструкции.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://t.me/gesefaki"
                target="_blank"
                rel="noreferrer"
              >
                <Send aria-hidden="true" size={18} />
                Написать в Telegram
              </a>
              <a className="button button-ghost" href="#projects">
                Смотреть проекты
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
            </div>

            <ul className="stack-list" aria-label="Основные технологии">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="work-panel" aria-label="Подход к работе">
            <div className="panel-header">
              <span>WORKFLOW / 01</span>
              <span className="panel-live">ONLINE</span>
            </div>

            <p className="panel-title">Сначала — нужный результат.</p>
            <p className="panel-text">
              Разбираюсь в задаче, обозначаю ограничения и выбираю решение без
              лишней сложности.
            </p>

            <ol className="workflow-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Разобраться</strong>
                  <small>Цель, контекст, ограничения</small>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Собрать</strong>
                  <small>Рабочая версия по этапам</small>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Запустить</strong>
                  <small>Проверка, настройка, инструкция</small>
                </div>
              </li>
            </ol>

            <div className="panel-footer">
              <span>Текущее направление</span>
              <strong>Backend / Automation</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="services-section page-shell" id="services">
        <div className="section-heading section-heading--services">
          <div>
            <p className="section-kicker">Что могу сделать</p>
            <h2>От точечной задачи до запуска сервиса</h2>
          </div>
          <p>
            Можно прийти с подробным ТЗ, ссылкой на существующий проект или
            просто описанием идеи — формат входа не важнее результата.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.index}>
              <span>{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section page-shell" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Из практики</p>
            <h2>Проекты, где важна система</h2>
          </div>
          <p>
            Не просто набор технологий, а решения с архитектурой, окружением и
            вниманием к эксплуатации.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.title}
            >
              <div className="project-topline">
                <span>{project.index}</span>
                <span>{project.label}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul
                className="tag-list"
                aria-label={`Технологии ${project.title}`}
              >
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer">
                Открыть на GitHub
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </article>
          ))}
        </div>

        <article className="lab-card">
          <div>
            <span>03 / LAB</span>
            <h3>LocalServer</h3>
          </div>
          <p>
            Локальное файловое хранилище с веб-интерфейсом: загрузка,
            скачивание, просмотр и удаление файлов через ASP.NET Core API.
          </p>
          <ul className="tag-list" aria-label="Технологии LocalServer">
            <li>ASP.NET Core</li>
            <li>JavaScript</li>
            <li>Nginx</li>
            <li>Docker</li>
          </ul>
          <a
            href="https://github.com/gesefaki/LocalServer"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </article>
      </section>

      <section className="approach-section" id="approach">
        <div className="page-shell approach-grid">
          <div className="approach-intro">
            <p className="section-kicker">Как строится работа</p>
            <h2>Спокойный процесс без технического тумана</h2>
            <p>
              Я заранее говорю об ограничениях, не усложняю проект без причины и
              довожу согласованный результат до рабочего состояния.
            </p>
            <a
              href="https://www.fl.ru/users/gesefaki1/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Публичный профиль на FL.ru
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>

          <ol className="principles-list">
            {principles.map(([index, title, text]) => (
              <li key={index}>
                <span>{index}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="faq-section page-shell">
        <div className="faq-heading">
          <p className="section-kicker">Коротко о главном</p>
          <h2>До начала работы</h2>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section page-shell" id="contact">
        <div className="contact-eyebrow">
          <span>START A PROJECT</span>
          <span>2026 / ONLINE</span>
        </div>
        <h2>
          Расскажите, что должно работать.
          <span>С технической частью разберусь.</span>
        </h2>
        <div className="contact-actions">
          <a
            className="button button-dark"
            href="https://t.me/gesefaki"
            target="_blank"
            rel="noreferrer"
          >
            <Send aria-hidden="true" size={18} />
            Написать в Telegram
          </a>
          <a
            className="button button-outline-dark"
            href="mailto:mailgesefaka@gmail.com"
          >
            <Mail aria-hidden="true" size={18} />
            Отправить email
          </a>
        </div>
      </section>

      <footer className="contact-strip page-shell">
        <p>gesefaki / backend &amp; automation</p>
        <div>
          <a href="https://t.me/gesefaki" target="_blank" rel="noreferrer">
            <Send aria-hidden="true" size={17} /> @gesefaki
          </a>
          <a href="mailto:mailgesefaka@gmail.com">
            <Mail aria-hidden="true" size={17} /> Email
          </a>
          <a
            href="https://github.com/gesefaki"
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch aria-hidden="true" size={17} /> GitHub
          </a>
          <a
            href="https://www.fl.ru/users/gesefaki1/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            FL.ru
          </a>
        </div>
      </footer>
    </main>
  );
}
