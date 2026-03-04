# Portfolio Denilson Junior

Portfolio em React + Vite com foco em BI, dados e desenvolvimento web.

## Rodar local

```bash
npm install
npm run dev
```

## Variaveis de ambiente

Crie um arquivo `.env` com:

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`VITE_GA_MEASUREMENT_ID` e opcional. Sem ele, o site funciona normalmente, mas sem GA4.

## Google Analytics (GA4)

A integracao ja esta pronta no codigo:
- pageview em SPA
- eventos de CTA e contatos
- eventos de envio de briefing

Eventos principais enviados:
- `page_view`
- `cta_click`
- `case_open`
- `case_repo_open`
- `contact_click`
- `lead_submit_attempt`
- `generate_lead`
- `lead_submit_error`

## Deploy na Vercel

1. Conecte este repositório na Vercel.
2. Em `Project Settings > Environment Variables`, adicione as variaveis do `.env`.
3. Garanta `VITE_GA_MEASUREMENT_ID` com seu ID GA4 (ex.: `G-AB12CD34EF`).
4. Deploy.

Comandos usados pela Vercel:
- Build: `npm run build`
- Output: `dist`

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Supabase proprio

Para migrar do Supabase da Lovable para o seu projeto proprio, siga:

- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
