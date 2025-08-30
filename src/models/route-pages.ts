export interface Route {
    path: string;
    label: string;
}

export const routes: Route[] = [
    { path: '/sobre-nos', label: 'Sobre Nós' },
    { path: '/servicos', label: 'Serviços' },
    // { path: '/portfolio', label: 'Portfólio' },
    { path: '/contato', label: 'Contato' },
]