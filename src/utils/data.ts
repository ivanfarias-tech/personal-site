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
  { name: 'azure', color: '#0078D4' },
  { name: 'aws', color: '#FF9900' },
  { name: 'terraform', color: '#7B42BC' },
  { name: 'proxmox', color: '#E57000' },
  { name: 'linux', color: '#FCC624' },
  { name: 'windows server', color: '#0078D4' },
  { name: 'docker', color: '#2496ED' },
  { name: 'mikrotik', color: '#293239' },
  { name: 'truenas', color: '#0095D5' },
  { name: 'git/github', color: '#F05032' },
]

export { projects, stack }