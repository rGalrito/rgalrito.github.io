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
      'Ansible roles and playbooks for consistent configuration and faster rollout across an IoT device fleet at a hardware startup.',
    tags: ['Ansible', 'IoT', 'Terraform'],
  },
  {
    title: 'Edge Serverless Pipeline',
    description:
      'Event-driven AWS Lambda functions with local edge execution and offline synchronization for field devices.',
    tags: ['AWS Lambda', 'Python', 'IoT'],
  },
  {
    title: 'Homelab & Side Projects',
    description:
      'Personal infrastructure experiments — k3s clusters, monitoring stacks, and automation tooling on self-hosted hardware.',
    url: 'https://github.com/rGalrito',
    tags: ['k3s', 'Grafana', 'ArgoCD', 'Helm Charts', 'Automation'],
  },
];
