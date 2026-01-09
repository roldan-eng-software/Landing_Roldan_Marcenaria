# Configuração do EmailJS para o Formulário de Contato

## Passos para Configurar o EmailJS

### 1. Criar Conta EmailJS
- Acesse [EmailJS](https://www.emailjs.com/)
- Crie uma conta gratuita usando o email `roldan.marcenaria@gmail.com`

### 2. Configurar Serviço de Email
- No dashboard do EmailJS, vá para "Email Services"
- Clique em "Add New Service"
- Escolha "Gmail" e conecte sua conta `roldan.marcenaria@gmail.com`
- Anote o **Service ID** gerado (ex: `service_gmail123`)

### 3. Criar Template de Email
- Vá para "Email Templates"
- Clique em "Create New Template"
- Use o seguinte template:

```
Assunto: Novo contato do site - {{from_name}}

De: {{from_email}}
Telefone: {{from_phone}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do site Roldan Marcenaria
```

- Anote o **Template ID** gerado (ex: `template_contato123`)

### 4. Obter Chave Pública
- Vá para "Account" > "API Keys"
- Copie a **Public Key** (ex: `abc123def456`)

### 5. Atualizar o Código
Substitua os placeholders no arquivo `index.html`:

```javascript
// Linha 999
emailjs.init("SUA_CHAVE_PUBLICA_AQUI");

// Linha 1028
emailjs.send('SEU_SERVICE_ID_AQUI', 'SEU_TEMPLATE_ID_AQUI', templateParams)
```

### 6. Testar
- Abra o site
- Preencha o formulário com dados de teste
- Verifique se recebe o email em `roldan.marcenaria@gmail.com`

## Benefícios
- ✅ Emails enviados diretamente do Gmail
- ✅ Sem necessidade de backend
- ✅ Interface profissional
- ✅ Fallback para WhatsApp em caso de erro
- ✅ Indicador de carregamento
- ✅ Mensagens de sucesso/erro

## Limitações do Plano Gratuito
- 200 emails por mês
- 2 templates
- 1 serviço de email
- Suficiente para a maioria das pequenas empresas
