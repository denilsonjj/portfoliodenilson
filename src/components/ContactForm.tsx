import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ name, email, message }]);

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-foreground">
              Entre em Contato
            </CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
              Tem um projeto em mente? Vamos conversar!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                variant="secondary"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;