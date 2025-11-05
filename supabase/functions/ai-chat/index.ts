import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `Você é o assistente IA do portfólio de Denilson Junior. Seja DIRETO, CONCISO e ÚTIL.

INFORMAÇÕES PRINCIPAIS:
- Analista de Dados e Desenvolvedor Full Stack
- Python, SQL, Power BI, React, TypeScript
- Machine Learning, dashboards interativos, aplicações web modernas
- Experiência industrial transformando dados em insights estratégicos

CONTATOS:
- LinkedIn: https://www.linkedin.com/in/denilsonjj
- Email: juniordenilson363@gmail.com

INSTRUÇÕES:
1. Respostas curtas e diretas (máximo 3-4 linhas)
2. Use bullet points quando listar informações
3. Quando perguntarem sobre contato, use a função show_contact_info
4. Seja proativo: sugira ações concretas
5. Destaque projetos e habilidades relevantes ao contexto
6. Incentive contato para projetos interessantes`
          },
          { role: 'user', content: message }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'show_contact_info',
              description: 'Mostra informações de contato estruturadas com botões interativos',
              parameters: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    description: 'Mensagem curta para acompanhar os botões de contato'
                  }
                },
                required: ['message']
              }
            }
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API Error:', response.status, errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const choice = data.choices[0];
    
    // Check if AI wants to use a tool
    if (choice.message.tool_calls && choice.message.tool_calls.length > 0) {
      const toolCall = choice.message.tool_calls[0];
      if (toolCall.function.name === 'show_contact_info') {
        const args = JSON.parse(toolCall.function.arguments);
        return new Response(
          JSON.stringify({ 
            message: args.message,
            showContacts: true 
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }
    
    const aiMessage = choice.message.content;

    return new Response(
      JSON.stringify({ message: aiMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});