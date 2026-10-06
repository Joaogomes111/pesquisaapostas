# Pesquisa de buscas por casas de apostas

Site estático em HTML, CSS e JavaScript, sem instalação de pacotes e sem etapa de build.

## Estrutura

```text
index.html       Página principal com as oito capturas embutidas
styles.css       Estilos responsivos
script.js        Ampliação das capturas e navegação
vercel.json      Configuração da Vercel para servir a raiz
.gitignore       Arquivos locais que não devem ir ao Git
README.md        Este guia
```

## GitHub → Vercel

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta para a raiz** do repositório. `index.html` deve ficar na raiz, não dentro de outra pasta.
2. Na Vercel, crie um projeto e importe esse repositório GitHub.
3. Confirme **Framework Preset: Other** e **Root Directory: `./`**. O arquivo `vercel.json` define `outputDirectory` como `.`. Não há comando de build nem variáveis de ambiente necessárias.
4. Faça o deploy. Novos commits no repositório gerarão novos deploys pela integração Git.

As imagens estão embutidas no `index.html`. A página não depende de uma pasta `assets/`. Se você já publicou a versão anterior, substitua pelo menos `index.html` e `script.js` no GitHub; o novo commit atualizará a página na Vercel.

Documentação oficial: [importar repositórios Git](https://vercel.com/docs/git) e [configurar site estático sem build](https://vercel.com/docs/builds/configure-a-build).

## GitHub Pages (opcional)

O mesmo conteúdo também funciona no GitHub Pages: **Settings → Pages → Deploy from a branch → /(root)**. [Instruções oficiais](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Antes de publicar

As oito capturas foram incluídas como recebidas e mostram partes da barra do navegador, incluindo favoritos e avatar. Revise o conteúdo antes de tornar o repositório público.

Os resultados orgânicos são um recorte de 06/10/2026. A página não consulta dados atuais automaticamente; atualizações exigem editar os arquivos e enviar um novo commit.
