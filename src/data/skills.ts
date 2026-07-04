export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      'AWS',
      'Terraform',
      'Kubernetes',
      'Helm',
      'ArgoCD',
      'GitOps',
      'Serverless (Lambda)',
    ],
  },
  {
    category: 'Automation & Config Management & CI',
    items: ['Ansible', 'Salt Stack', 'GitLab CI/CD', 'SAST'],
  },
  {
    category: 'Observability',
    items: [
      'Grafana',
      'Prometheus',
      'InfluxDB',
      'ELK Stack',
      'Telegraf',
      'Victoria Metrics',
    ],
  },
  {
    category: 'Security & IAM',
    items: ['SAML', 'OpenID Connect', 'Smart Card', 'RBAC', 'ServiceNow'],
  },
  {
    category: 'Languages & Scripting',
    items: ['Python', 'Bash', 'Perl', 'SQL'],
  },
  {
    category: 'Spoken Languages',
    items: ['Portuguese (Native)', 'English (C2)', 'French (A1)'],
  },
];
