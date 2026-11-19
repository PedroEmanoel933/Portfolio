/* ---------- idioma e textos ---------- */
const i18n = {
    pt: {
        title: 'Portfólio - Pedro Emanoel',
        menuLabel: 'Menu', techLabel: 'Tecnologias',
        navWork: 'Projetos', navAbout: 'Sobre', navEdu: 'Formação', navContact: 'Contato ↗',
        birth: 'Nascimento', loc: 'Local', focus: 'Foco', focusVal: 'Desenvolvimento Web',
        ctaWork: 'Ver projetos', ctaContact: 'Entrar em contato →',
        aboutTitle: 'Sobre mim',
        aboutText: 'Sou estudante de Engenharia de Software e desenvolvo projetos web do banco de dados até a interface. Gosto de transformar ideias em aplicações funcionais, organizadas e acessíveis.',
        aboutBtn: 'Ver projetos', photoAlt: 'Foto de Pedro Emanoel',
        workTitle: 'Projetos Pessoais', github: 'Ver GitHub',
        projFilter: 'Filtrar', projFilterAll: 'Todos',
        eduTitle: 'Formação e ferramentas',
        q1: 'Cursando Engenharia de Software, aprendendo na prática com projetos próprios.', q1c: 'Formação · UCSAL',
        q2: 'HTML, CSS e JavaScript puros no front-end, PHP e MySQL no back-end.', q2c: 'Tecnologias',
        q3: 'Desenvolvimento em nuvem com GitHub Codespaces e publicação na Vercel.', q3c: 'Ambiente de trabalho',
        stat: 'Projetos pessoais, entre os já publicados e os que estão em desenvolvimento.',
        contactTitle: 'Vamos conversar?',
        cfLabel: 'Sua mensagem', cfPlaceholder: 'Escreva sua mensagem para o Pedro...',
        cfSend: 'Enviar pelo WhatsApp', cfEmpty: 'Escreva uma mensagem antes de enviar.', cfOk: 'Abrindo o WhatsApp...',
        fNav: 'Navegação', fContact: 'Contato', fSocial: 'Redes',
        legal: '© 2026 Pedro Emanoel. Todos os direitos reservados.', made: 'Feito com \u2764',
        themeToLight: 'Ativar modo claro', themeToDark: 'Ativar modo escuro',
        waMsg: 'Olá, Pedro! Vi o seu portfólio e gostei dos seus projetos. Gostaria de conversar com você sobre uma oportunidade. Podemos falar?'
    },
    en: {
        title: 'Portfolio - Pedro Emanoel',
        menuLabel: 'Menu', techLabel: 'Technologies',
        navWork: 'Projects', navAbout: 'About', navEdu: 'Education', navContact: 'Contact ↗',
        birth: 'Born', loc: 'Location', focus: 'Focus', focusVal: 'Web Development',
        ctaWork: 'View projects', ctaContact: 'Get in touch →',
        aboutTitle: 'About me',
        aboutText: "I'm a Software Engineering student who builds web projects from the database to the interface. I like turning ideas into functional, well-organized and accessible applications.",
        aboutBtn: 'View projects', photoAlt: 'Photo of Pedro Emanoel',
        workTitle: 'Personal Projects', github: 'View GitHub',
        projFilter: 'Filter', projFilterAll: 'All',
        eduTitle: 'Education and tools',
        q1: 'Studying Software Engineering, learning by doing with my own projects.', q1c: 'Education · UCSAL',
        q2: 'Plain HTML, CSS and JavaScript on the front end, PHP and MySQL on the back end.', q2c: 'Technologies',
        q3: 'Cloud development with GitHub Codespaces and deployment on Vercel.', q3c: 'Work environment',
        stat: 'Personal projects, both published and in development.',
        contactTitle: "Let's talk?",
        cfLabel: 'Your message', cfPlaceholder: 'Write your message to Pedro...',
        cfSend: 'Send via WhatsApp', cfEmpty: 'Write a message before sending.', cfOk: 'Opening WhatsApp...',
        fNav: 'Navigation', fContact: 'Contact', fSocial: 'Social',
        legal: '© 2026 Pedro Emanoel. All rights reserved.', made: 'Made with \u2764',
        themeToLight: 'Switch to light mode', themeToDark: 'Switch to dark mode',
        waMsg: "Hello, Pedro! I saw your portfolio and liked your projects. I'd like to talk with you about an opportunity. Can we chat?"
    }
};

const WA = 'https://wa.me/5571984358900';

let lang = 'pt';
try { lang = localStorage.getItem('lang') || 'pt'; } catch (e) { }
const t = k => i18n[lang][k];
const pick = v => (typeof v === 'string' ? v : v[lang]);

/* ---------- marquee ---------- */
const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
const clients = [
    { name: 'Java', icon: 'java/java-original.svg' },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
    { name: 'Spring Boot', icon: 'spring/spring-original.svg' },
    { name: 'PHP', icon: 'php/php-original.svg' },
    { name: 'Laravel', icon: 'laravel/laravel-original.svg' },
    { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', icon: 'docker/docker-original.svg' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
];

const track = document.getElementById('track');
if (track) {
    track.innerHTML = [...clients, ...clients].map(c =>
        `<span class="stack">
     <img src="${base}${c.icon}" alt="" width="28" height="28" loading="lazy">
     ${c.name}
   </span>`
    ).join('');
}

/* ---------- projetos ---------- */
const icons = {
    HTML: 'html5/html5-original.svg',
    CSS: 'css3/css3-original.svg',
    JavaScript: 'javascript/javascript-original.svg',
    PHP: 'php/php-original.svg',
    MySQL: 'mysql/mysql-original.svg'
};

const work = [
    {
        nome: 'FitCalc', img: 'img/fit-calc.png',
        status: { pt: 'Saúde e fitness', en: 'Health & fitness' },
        descricao: { pt: 'Calculadora de IMC com cadastro, login e histórico de cálculos salvos no banco de dados.', en: 'BMI calculator with sign-up, login and a history of calculations saved in the database.' },
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], url: 'https://github.com/PedroEmanoel933/FitCalc'
    },
    {
        nome: 'Age Calculator', img: 'img/age-calculator.png',
        status: { pt: 'Utilitário', en: 'Utility' },
        descricao: { pt: 'Calculadora de idade simples e eficiente.', en: 'Simple and efficient age calculator.' },
        stacks: ['HTML', 'CSS', 'JavaScript'], url: 'https://age-calculator-pead.vercel.app'
    },
    {
        nome: 'API NBA Players', img: 'img/api-nba-players.svg',
        status: { pt: 'API', en: 'API' },
        descricao: { pt: 'API que retorna dados de jogadores da NBA.', en: 'API that returns NBA player data.' },
        stacks: ['PHP'], url: 'https://github.com/PedroEmanoel933/API-NBA-Players'
    },
    {
        nome: { pt: 'Cardápio 3D', en: '3D Menu' }, img: 'img/cardapio-3d.svg',
        status: { pt: 'Em breve', en: 'Coming soon' },
        descricao: { pt: 'Cardápio digital interativo em que o cliente visualiza os pratos em 3D.', en: 'Interactive digital menu where customers view the dishes in 3D.' },
        stacks: [], url: ''
    },
    {
        nome: { pt: 'Comunidade Tech', en: 'Tech Community' }, img: 'img/comunidade-tech.svg',
        status: { pt: 'Em breve', en: 'Coming soon' },
        descricao: { pt: 'Site de comunidade para desenvolvedores compartilharem projetos e conteúdos.', en: 'Community site where developers share projects and content.' },
        stacks: [], url: ''
    },
];

let projFilterActive = 'all';

function renderWork() {
    const grid = document.getElementById('grid');
    if (!grid) return;

    const list = projFilterActive === 'all' ? work : work.filter(w => w.stacks.includes(projFilterActive));

    grid.innerHTML = list.map(w => {
        const nome = pick(w.nome);
        const stacks = w.stacks.map(s =>
            '<img src="' + base + icons[s] + '" alt="' + s + '" title="' + s + '" width="26" height="26" loading="lazy">'
        ).join('');

        const isColor = w.img.startsWith('#');
        const thumb = isColor
            ? '<div class="thumb" style="background:' + w.img + '">' + nome + '</div>'
            : '<div class="thumb"><img src="' + w.img + '" alt="' + nome + '"></div>';

        const inner = thumb +
            '<div class="t"><span class="tag">' + pick(w.status) + '</span><h3>' + nome + '</h3><p>' + pick(w.descricao) + '</p>' +
            (stacks ? '<div class="stacks">' + stacks + '</div>' : '') + '</div>';

        return w.url
            ? '<a class="card" href="' + w.url + '" target="_blank" rel="noopener">' + inner + '</a>'
            : '<div class="card soon">' + inner + '</div>';
    }).join('');
}

/* ---------- filtro de projetos (proj-filter) ---------- */
const projFilterBtn = document.getElementById('projFilterBtn');
const projFilterMenu = document.getElementById('projFilterMenu');
const projFilterLabel = document.getElementById('projFilterLabel');

function renderProjFilter() {
    if (!projFilterMenu) return;

    // as opções vêm das stacks que existem nos projetos
    const stacks = [...new Set(work.flatMap(w => w.stacks))];

    projFilterMenu.innerHTML = ['all', ...stacks].map(s => {
        const on = s === projFilterActive;
        const icon = s === 'all' ? '' : '<img src="' + base + icons[s] + '" alt="" width="20" height="20">';
        const name = s === 'all' ? t('projFilterAll') : s;
        return '<button type="button" class="proj-filter__item' + (on ? ' is-active' : '') + '" data-proj-filter="' + s + '" aria-pressed="' + on + '">' + icon + name + '</button>';
    }).join('');

    if (projFilterLabel) {
        projFilterLabel.textContent = projFilterActive === 'all' ? t('projFilter') : t('projFilter') + ': ' + projFilterActive;
    }
}

function closeProjFilter() {
    if (!projFilterMenu || !projFilterBtn) return;
    projFilterMenu.hidden = true;
    projFilterBtn.setAttribute('aria-expanded', 'false');
}

if (projFilterBtn && projFilterMenu) {
    projFilterBtn.addEventListener('click', e => {
        e.stopPropagation();
        const willOpen = projFilterMenu.hidden;
        projFilterMenu.hidden = !willOpen;
        projFilterBtn.setAttribute('aria-expanded', String(willOpen));
    });

    projFilterMenu.addEventListener('click', e => {
        const b = e.target.closest('[data-proj-filter]');
        if (!b) return;
        projFilterActive = b.dataset.projFilter;
        renderWork();
        renderProjFilter();
        closeProjFilter();
    });

    document.addEventListener('click', e => { if (!e.target.closest('#projFilter')) closeProjFilter(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjFilter(); });
}

/* ---------- formulário de contato (cf): envia a mensagem para o WhatsApp ---------- */
const cfForm = document.getElementById('cfForm');
const cfText = document.getElementById('cfText');
const cfStatus = document.getElementById('cfStatus');

if (cfForm && cfText && cfStatus) {
    cfForm.addEventListener('submit', e => {
        e.preventDefault();
        const text = cfText.value.trim();

        if (!text) {
            cfStatus.style.color = 'var(--orange)';
            cfStatus.textContent = t('cfEmpty');
            cfText.focus();
            return;
        }

        cfStatus.style.color = 'var(--teal)';
        cfStatus.textContent = t('cfOk');
        window.open(WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });

    cfText.addEventListener('input', () => { cfStatus.textContent = ''; });
}

/* ---------- tema claro/escuro ---------- */
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

function currentTheme() {
    return root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
function paintTheme() {
    if (!themeBtn) return;
    const dark = currentTheme() === 'dark';
    themeBtn.innerHTML = dark ? SUN : MOON;
    const label = dark ? t('themeToLight') : t('themeToDark');
    themeBtn.setAttribute('aria-label', label);
    themeBtn.title = label;
}
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch (e) { }
        paintTheme();
    });
}

/* ---------- troca de idioma ---------- */
function setLang(l) {
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) { }
    root.lang = l === 'pt' ? 'pt-br' : 'en';
    document.title = t('title');

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-wa]').forEach(a => { a.href = WA + '?text=' + encodeURIComponent(t('waMsg')); });

    document.querySelectorAll('[data-lang]').forEach(b => {
        const on = b.dataset.lang === l;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on);
    });

    if (cfStatus) cfStatus.textContent = '';
    renderWork();
    renderProjFilter();
    paintTheme();
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- céu: posições calculadas só com a data ---------- */
function place(id, deg, r) {
    const el = document.getElementById(id);
    if (!el) return;
    const a = (deg - 90) * Math.PI / 180;
    el.style.left = (50 + r * Math.cos(a)) + '%';
    el.style.top = (50 + r * Math.sin(a)) + '%';
}
function updateSky() {
    const now = new Date(), d = (now - new Date(Date.UTC(2000, 0, 1, 12))) / 864e5;
    const norm = x => ((x % 360) + 360) % 360;
    place('sun', norm(280.46 + 0.9856474 * d), 40);
    place('moon', norm(218.32 + 13.176396 * d), 40);
    place('jup', norm(34.4 + 0.0831 * d), 40);
    place('mar', norm(355.4 + 0.5240 * d), 40);
    place('sat', norm(50.1 + 0.0335 * d), 40);
}
updateSky(); setInterval(updateSky, 60000);

/* ---------- menu mobile ---------- */
const mb = document.getElementById('menuBtn'), lk = document.getElementById('links');
if (mb && lk) {
    mb.addEventListener('click', () => { const o = lk.classList.toggle('open'); mb.setAttribute('aria-expanded', o) });
    lk.addEventListener('click', e => { if (e.target.tagName === 'A') { lk.classList.remove('open'); mb.setAttribute('aria-expanded', 'false') } });
}

/* ---------- início ---------- */
setLang(lang);