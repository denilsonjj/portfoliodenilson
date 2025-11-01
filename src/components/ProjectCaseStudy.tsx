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
        <Button variant="outline" size="sm" className="gap-2">
          <FileText className="w-4 h-4" />
          Estudo de Caso
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {challenge && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Desafio</h3>
              <p className="text-muted-foreground">{challenge}</p>
            </div>
          )}
          {solution && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Solução</h3>
              <p className="text-muted-foreground">{solution}</p>
            </div>
          )}
          {results && results.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Resultados</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
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
