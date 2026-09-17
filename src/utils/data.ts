type Project = {
  name: string
  description: string
  link: string
  meta: string
  cmd: string
  langColor: string
}

const projects: Project[] = [
  {
    name: 'azure hybrid lab',
    description:
      'Hybrid infrastructure experiments connecting on-premises services with Microsoft Azure.',
    link: 'https://github.com/ibmfarias',
    meta: 'Azure · Hybrid Cloud · Terraform',
    cmd: 'terraform plan',
    langColor: '#0078d4',
  },
  {
    name: 'homelab infrastructure',
    description:
      'Private cloud infrastructure built with Proxmox, TrueNAS, OPNsense and MikroTik.',
    link: 'https://github.com/ibmfarias',
    meta: 'Proxmox · TrueNAS · OPNsense',
    cmd: 'pvesh get /nodes',
    langColor: '#e57000',
  },
  {
    name: 'network segmentation',
    description:
      'VLAN-based network architecture exploring firewalling, routing and controlled inter-network access.',
    link: 'https://github.com/ibmfarias',
    meta: 'OPNsense · MikroTik · VLAN',
    cmd: '/firewall/configure-vlan',
    langColor: '#e2442f',
  },
  {
    name: 'infrastructure automation',
    description:
      'Infrastructure-as-code experiments for repeatable cloud and homelab environments.',
    link: 'https://github.com/ibmfarias',
    meta: 'Terraform · GitHub Actions · Cloud',
    cmd: 'terraform apply',
    langColor: '#844fba',
  },
]

const stack = [
  { name: 'typescript', color: '#3178c6' },
  { name: 'javascript', color: '#f7df1e' },
  { name: 'node.js', color: '#5fa04e' },
  { name: 'astro', color: '#bc52ee' },
  { name: 'react', color: '#61dafb' },
  { name: 'tailwindcss', color: '#38bdf8' },
  { name: 'vite', color: '#646cff' },
  { name: 'go', color: '#00add8' },
  { name: 'python', color: '#3776ab' },
  { name: 'docker', color: '#2496ed' },
]

export { projects, stack }