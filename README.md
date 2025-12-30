# Roldan Marcenaria — Landing Page

Este repositório contém uma **landing page estática** (apenas `index.html`) pronta para ser publicada no **GitHub Pages**.

## O que fiz
- Adicionei um workflow GitHub Actions (`.github/workflows/deploy.yml`) que publica automaticamente o conteúdo da pasta `public/` no GitHub Pages sempre que houver `push` para `main` ou `master`.
- Adicionei um `404.html` simples e um `README.md` com instruções.
- Adicionei um `.gitignore` básico.

## Como funciona
1. Sempre que você der push para a branch `main` (ou `master`), o workflow:
   - copia os arquivos públicos para `public/` (exclui `.github`, `.git`, `node_modules`);
   - faz upload do artefato;
   - publica o conteúdo via GitHub Pages.

2. O site ficará disponível em: `https://<usuario>.github.io/<nome-do-repositorio>/` (para repositório de projeto) ou `https://<usuario>.github.io/` (se o repositório for `username.github.io`).

## Testar localmente
- Simples: abra `index.html` no navegador.
- Melhor (serve via HTTP):
  - Python 3: `python3 -m http.server 8000` e abrir `http://localhost:8000`
  - ou instalar `http-server`: `npm i -g http-server` e rodar `http-server -p 8000`.

## Custom domain
Se você quer usar um domínio customizado:
1. Crie um arquivo `CNAME` na raiz do repositório contendo apenas seu domínio (ex: `seusite.com`).
2. Configure o DNS (A/ALIAS/CNAME) apontando para os records do GitHub Pages.

## Observações
- O projeto já utiliza imagens externas e CDNs, portanto não há necessidade de build.
- Se tiver assets locais (imagens, fontes, etc.), coloque-os na raiz ou em uma pasta e confirme que as referências no `index.html` são relativas (ex: `./assets/img.jpg`).

## Google Analytics 🔍
- Adicionei um snippet do Google Analytics (`gtag.js`) no `index.html` com o Measurement ID `G-QCJ32S4Z0P`.
- O Google Analytics **é carregado somente se o visitante aceitar** o banner de cookies que aparece na primeira visita; se ele recusar, o GA não será executado.
- Habilitamos `anonymize_ip: true` por padrão para ajudar conformidade com LGPD/GDPR. Veja `privacy.html` para a política de privacidade simples incluída no projeto.

---

Se quiser, eu posso:  
- adicionar `CNAME` com seu domínio;  
- ajustar referências de assets locais para caminhos relativos;  
- criar um workflow que rode apenas para uma branch específica ou que inclua etapas de build (se futuramente tivermos ferramentas como SASS/JS bundling).