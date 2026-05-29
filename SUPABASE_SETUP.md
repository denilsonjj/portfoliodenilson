# Migracao para seu Supabase (sem IA)

Este projeto ja esta preparado para rodar no seu Supabase proprio.

## 1) Criar/usar seu projeto Supabase

No painel do Supabase, pegue:
- `Project URL`
- `anon public key`
- `Project ref` (Reference ID)

## 2) Criar estrutura minima no banco

Execute no SQL Editor do seu Supabase o arquivo:

- `supabase/migrations/20251103132323_8703946e-e614-4eb1-af16-75810ce03ac3.sql`

Ele cria:
- tabela `public.contact_messages`
- RLS
- policy de insert publico
- indice por data

## 3) Ajustar variaveis locais

No `.env` deste projeto, use suas credenciais:

```bash
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=SUA_ANON_KEY
VITE_SUPABASE_PROJECT_ID=SEU_PROJECT_REF
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 4) Configurar função de e-mail (opcional, recomendada)

A funcao usada pelo contato e:
- `supabase/functions/send-contact-email`

Defina segredo no Supabase:

```bash
supabase secrets set RESEND_API_KEY=SEU_RESEND_KEY --project-ref SEU_PROJECT_REF
```

Deploy da funcao:

```bash
supabase functions deploy send-contact-email --project-ref SEU_PROJECT_REF
```

`verify_jwt = false` ja esta definido em `supabase/config.toml` para permitir chamada publica do formulario.

## 5) Enviar leads para Google Sheets (opcional)

Para gravar os leads tambem em uma planilha:

1. Abra a planilha no Google Sheets.
2. Va em `Extensoes > Apps Script`.
3. Cole o conteudo de `docs/google-sheets-leads-webhook.gs`.
4. Clique em `Implantar > Nova implantacao`.
5. Escolha `Aplicativo da Web`.
6. Em `Executar como`, selecione sua conta.
7. Em `Quem pode acessar`, selecione `Qualquer pessoa`.
8. Copie a URL gerada do Web App.

Depois salve essa URL como segredo no Supabase:

```bash
supabase secrets set GOOGLE_SHEETS_WEBHOOK_URL="SUA_URL_DO_WEB_APP" --project-ref SEU_PROJECT_REF
```

Depois redeploy a funcao:

```bash
supabase functions deploy send-contact-email --project-ref SEU_PROJECT_REF
```

A planilha usada para o seu fluxo atual e:
`https://docs.google.com/spreadsheets/d/1e3VLIYJtDyvqRwCjfDlaed7jrEKsAc1U-1suTBckl_o/edit?usp=sharing`

## 6) Vercel

No projeto da Vercel, em `Environment Variables`, adicione as mesmas variaveis do `.env`.

## 7) Sobre IA

A parte de IA pode ficar ignorada.
- O site principal nao depende do `AIChat`.
- `supabase/config.toml` foi ajustado para focar apenas em `send-contact-email`.

## 8) Passo extra no Lovable (se for continuar usando a plataforma)

No Lovable, configure as mesmas variaveis de ambiente (`VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`) apontando para seu projeto Supabase proprio.

Assim, tanto Lovable quanto este repo passam a usar o mesmo banco.
