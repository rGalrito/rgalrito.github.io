export type Project = {
  title: string;
  description: string;
  url?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'IoT Fleet Automation',
    description:
      'Inherited and improved Ansible roles and playbooks for consistent configuration and faster rollout across an IoT device fleet at a hardware startup.',
    tags: ['Ansible', 'Linux', 'Observability'],
  },
  {
    title: 'Edge Config Management',
    description:
      'Deployed Salt Stack and set up Salt Minions for a fleet of 2000+ devices to avoid configuration drift, misconfiguration and improve scalability.',
    tags: ['Salt Stack', 'GitOps', 'Remote Execution'],
  },
  {
    title: 'MDM implementation over 600+ tablets',
    description:
      'Onboarded Android tablets into a centralized solution, to improve visibility, remote control and application deployment.',
    tags: ['Esper', 'Release Management', 'Ownership'],
  },
  {
    title: 'Homelab & Side Projects',
    description:
      'Personal infrastructure experiments — k3s clusters, monitoring stacks, and automation tooling on self-hosted hardware.',
    url: 'https://github.com/rGalrito',
    tags: ['k3s', 'Grafana', 'ArgoCD', 'Helm Charts', 'Automation'],
  },
];
