import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface CaseStudyProps {
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
}

export const ProjectCaseStudy = ({
  title,
  description,
  challenge,
  solution,
  results,
  technologies,
}: CaseStudyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full border-border bg-card/30 gap-2">
          <FileText className="h-4 w-4" />
          Estudo de caso
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto border-border bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          {challenge && (
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Desafio</h3>
              <p className="text-muted-foreground">{challenge}</p>
            </div>
          )}
          {solution && (
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Solução</h3>
              <p className="text-muted-foreground">{solution}</p>
            </div>
          )}
          {results && results.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Resultados</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                {results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="rounded-full border border-border bg-background/70 px-3 py-1 text-sm text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
