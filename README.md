# m3-dominio · o seu domínio de estudo

Módulo 3 · POO com TypeScript · Jovem Tech 2026 · T06D

Este é o seu repositório de casa. Aqui você faz sozinho, num domínio só seu, o mesmo que fez em sala com o professor (na comanda) e com o squad (no produto). Um domínio, do E21 ao E25.

## Como você usa

1. Clique em **Use this template → Create a new repository**, na sua conta. Nome: `m3-dominio`. Visibilidade: **Public**.
2. Em **Settings → Collaborators**, adicione `DevVitorFernandes`.
3. Clone dentro da pasta do módulo, com o nome `dominio`:

```
cd modulo-ts-poo
git clone <link do seu m3-dominio> dominio
```

## A regra do domínio

- Só seu: ninguém da turma repete.
- Pelo menos 3 coisas que se relacionam (numa biblioteca: livro, leitor, empréstimo).
- Fora: mercado, feira, lanchonete e o produto do seu squad.
- Fora da lista da aula vale, se cumprir a regra.

## O que entra aqui, encontro a encontro

| Encontro | O que o seu domínio ganha |
| --- | --- |
| E21 | `dominio.md` preenchido + Etapa 1: variáveis, vetores e funções tipadas |
| E22 | interface: o formato dos dados do domínio |
| E23 | classe: dado e regra juntos |
| E24 | encapsulamento: ninguém quebra a regra por fora |
| E25 | integração: as coisas do domínio conversando |

## O fluxo (o mesmo da aula)

1. **Issue:** Issues → New issue → **Etapa do dia**. Título `E2x · dominio · <etapa>`.
2. **Branch:** `git switch main` · `git pull` · `git switch -c <n>-dominio-<etapa>`.
3. **Código** em `src/`. `npm run build` termina sem erro.
4. **Commit e push:** `git add .` · `git commit -m "feat(dominio): ..."` · `git push -u origin <branch>`.
5. **Pull request** com `Closes #<n>`. Aqui não tem dupla: você mesmo revisa e faz o merge.
6. **Print** do PR mergeado no seu cartão **Domínio de estudo**, no Trello.

`package.json` e `tsconfig.json`: iguais aos da aula (cartão **TypeScript: comandos e erros**).

## Pastas

- `dominio.md` · como o seu domínio funciona de verdade: as coisas, as ações e as regras.
- `src/` · o código em TypeScript.
- `docs/modelo.md` · o mapa das classes do seu domínio (a partir do E23).
