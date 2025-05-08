import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \process.env.CONTEXT\ 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from /quotes/random (see file /app/quotes/random/route.js) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4 text-3xl font-bold">WorkBridge</h1>
                <p className="mb-6 text-lg italic">Conectando os talentos do futuro às empresas que transformam o presente.</p>

                <form className="mb-8 bg-white p-6 rounded shadow-md max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Login para candidatura</h2>
                    <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
                    <input type="password" placeholder="Senha" className="w-full mb-3 p-2 border rounded" required />
                    <button type="submit" className="btn btn-primary w-full">Entrar</button>
                </form>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Card title="Estágio em Cibersegurança">
                        <p>Para estudantes de TI com vontade de aprender na prática.</p>
                    </Card>
                    <Card title="Desenvolvedor Júnior">
                        <p>Para quem já tem noções de HTML, CSS e JavaScript.</p>
                    </Card>
                    <Card title="Assistente Administrativo">
                        <p>Para quem deseja atuar em áreas organizacionais de empresas parceiras.</p>
                    </Card>
                    <Card title="Designer Gráfico">
                        <p>Criação de materiais visuais para empresas inovadoras.</p>
                    </Card>
                </div>

                <form className="mt-10 bg-white p-6 rounded shadow-md max-w-xl">
                    <h2 className="text-xl font-semibold mb-4">Formulário de Candidatura</h2>
                    <input type="text" placeholder="Nome completo" className="w-full mb-3 p-2 border rounded" required />
                    <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
                    <input type="tel" placeholder="Telefone" className="w-full mb-3 p-2 border rounded" />
                    <input type="text" placeholder="Curso/Área de Interesse" className="w-full mb-3 p-2 border rounded" />
                    <textarea placeholder="Por que você quer essa vaga?" className="w-full mb-3 p-2 border rounded" rows={4}></textarea>
                    <button type="submit" className="btn btn-primary w-full">Enviar candidatura</button>
                </form>
            </section>

            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
