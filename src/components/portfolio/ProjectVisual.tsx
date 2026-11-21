import { BarChart3, CalendarDays, Database, FileSpreadsheet, FileText, LayoutGrid, Mail, Tag, Truck, Workflow } from "lucide-react";
import type { Project } from "@/data/portfolio";

export const ProjectVisual = ({ project }: { project: Project }) => (
  <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
    <div className="project-window">
      <div className="project-window-bar">
        <i /><i /><i />
        <span>{project.category}</span>
      </div>
      {project.visual === "finance" && (
        <div className="demo-app">
          <div className="demo-app-heading"><FileSpreadsheet /><b>Painel financeiro</b><span>Visão mensal</span></div>
          <div className="demo-tile-row">{["Entradas", "Saídas", "Saldo"].map((label) => <span key={label}>{label}</span>)}</div>
          <div className="demo-chart-layout">
            <div className="demo-chart-panel"><b>Fluxo de caixa</b><ChartBars values={[35, 52, 42, 69, 61, 85, 73, 91]} /></div>
            <div className="demo-chart-panel"><b>Movimentações</b><div className="demo-ledger">{["Receitas", "Despesas", "Resumo"].map((label) => <div key={label}>{label}<i /></div>)}</div></div>
          </div>
        </div>
      )}
      {project.visual === "planner" && (
        <div className="demo-app">
          <div className="demo-app-heading"><CalendarDays /><b>Planner de RH</b><span>Visão semanal</span></div>
          <div className="demo-calendar">
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex'].map((day) => <b key={day}>{day}</b>)}
            <span>Planejamento</span><span>Atividades</span><span>Acompanhamento</span><span>Revisão</span>
          </div>
        </div>
      )}
      {project.visual === "email" && (
        <div className="demo-app">
          <div className="demo-app-heading"><Workflow /><b>Fluxo de comunicação</b></div>
          <div className="demo-email-flow">
            <div><FileSpreadsheet /><b>Planilha de dados</b><span>Registros</span></div>
            <i />
            <div><Workflow /><b>Automação</b><span>Fluxo de envio</span></div>
            <i />
            <div><Mail /><b>E-mails</b><span>Comunicação</span></div>
          </div>
        </div>
      )}
      {project.visual === "support" && (
        <div className="demo-app">
          <div className="demo-app-heading"><LayoutGrid /><b>Central de atendimento</b><span>Assistência técnica</span></div>
          <div className="demo-kanban">
            {['Recebidos', 'Em atendimento', 'Concluídos'].map((status) => <div key={status}><b>{status}</b><span /><span /></div>)}
          </div>
        </div>
      )}
      {project.visual === "recruiting" && (
        <div className="demo-app">
          <div className="demo-app-heading"><BarChart3 /><b>Indicadores de recrutamento</b><span>Looker Studio</span></div>
          <div className="demo-tile-row">{["Funil", "SLA", "Geolocalização"].map((label) => <span key={label}>{label}</span>)}</div>
          <div className="demo-chart-layout">
            <div className="demo-chart-panel"><b>Etapas da seleção</b><div className="demo-ledger">{["Triagem", "Seleção", "Contratação"].map((label) => <div key={label}>{label}<i /></div>)}</div></div>
            <div className="demo-chart-panel"><b>SLA por etapa</b><ChartBars values={[47, 67, 84, 95]} /></div>
          </div>
        </div>
      )}
      {project.visual === "logistics" && (
        <div className="demo-app">
          <div className="demo-app-heading"><Truck /><b>Visão logística</b><span>Operação</span></div>
          <div className="demo-tile-row">{["Fluxo", "Volumes", "Indicadores"].map((label) => <span key={label}>{label}</span>)}</div>
          <div className="demo-chart-layout">
            <div className="demo-chart-panel"><b>Indicadores por período</b><ChartBars values={[50, 69, 61, 82, 75, 93]} /></div>
            <div className="demo-chart-panel"><b>Distribuição</b><div className="demo-ring" /></div>
          </div>
        </div>
      )}
      {project.visual === "system" && (
        <div className="demo-system">
          <div className="demo-rail"><LayoutGrid /><Database /><FileText /></div>
          <div className="demo-system-main">
            <b>Painel de operação</b>
            <div className="demo-tile-row"><span>Cadastros</span><span>Atividades</span><span>Registros</span></div>
            <div className="demo-table">
              {['Cadastro', 'Validação', 'Revisão'].map((item) => <div key={item}>{item}<i /><small>Concluído</small></div>)}
            </div>
          </div>
        </div>
      )}
      {project.visual === "labels" && (
        <div className="demo-label">
          <div className="demo-label-form">
            <b>Emissão de etiquetas</b>
            <span>Identificação</span><i />
            <span>Tipo de etiqueta</span><i />
            <small><Tag /> Gerar etiqueta</small>
          </div>
          <div className="demo-ticket"><Tag /><b>ETIQUETA</b><span>Prévia de impressão</span><i /></div>
        </div>
      )}
      {project.visual === "sales" && (
        <div className="demo-app">
          <div className="demo-app-heading"><BarChart3 /><b>Visão comercial</b><span>Indicadores</span></div>
          <div className="demo-tile-row">{["Volume", "Vendas", "Desempenho"].map((label) => <span key={label}>{label}</span>)}</div>
          <div className="demo-chart-layout">
            <div className="demo-chart-panel"><b>Evolução por período</b><ChartBars values={[42, 58, 51, 75, 65, 92, 78, 96]} /></div>
            <div className="demo-chart-panel"><b>Composição</b><div className="demo-ring" /></div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const ChartBars = ({ values }: { values: readonly number[] }) => (
  <div className="demo-bars">{values.map((height) => <i key={height} style={{ height: `${height}%` }} />)}</div>
);

export const projectIcons = { sistemas: LayoutGrid, dashboards: BarChart3, automacoes: Workflow };
