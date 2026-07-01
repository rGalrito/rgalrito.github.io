export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Terraform', 'Kubernetes', 'Serverless (Lambda)', 'RHEL'],
  },
  {
    category: 'Automation & IaC',
    items: ['Ansible', 'Salt Stack', 'GitLab CI/CD', 'Golden Images'],
  },
  {
    category: 'Observability',
    items: ['Grafana', 'InfluxDB', 'ELK Stack', 'Zabbix'],
  },
  {
    category: 'Security & IAM',
    items: [
      'ServiceNow',
      'RBAC',
      'SAML',
      'OpenID Connect',
      'Smart Card / PKI',
      'SAST (SonarCloud, Codacy)',
    ],
  },
  {
    category: 'Languages & Scripting',
    items: ['Python', 'Bash', 'Perl', 'PL/SQL'],
  },
  {
    category: 'Spoken Languages',
    items: ['Portuguese (Native)', 'English (C1)'],
  },
];
