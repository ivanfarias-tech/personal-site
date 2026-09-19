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
    link: 'https://github.com/ivanfarias-tech/azure-hybrid-lab',
    meta: 'Azure · Hybrid Cloud · Terraform',
    cmd: 'terraform plan',
    langColor: '#0078d4',
  },
  {
    name: 'homelab infrastructure',
    description:
      'Private cloud infrastructure built with Proxmox, TrueNAS, OPNsense and MikroTik.',
    link: 'https://github.com/ivanfarias-tech/homelab-infrastructure',
    meta: 'Proxmox · TrueNAS · OPNsense',
    cmd: 'pvesh get /nodes',
    langColor: '#e57000',
  },
  {
    name: 'network segmentation',
    description:
      'VLAN-based network architecture exploring firewalling, routing and controlled inter-network access.',
    link: 'https://github.com/ivanfarias-tech/network-segmentation',
    meta: 'OPNsense · MikroTik · VLAN',
    cmd: '/firewall/configure-vlan',
    langColor: '#e2442f',
  },
  {
    name: 'infrastructure automation',
    description:
      'Infrastructure-as-code experiments for repeatable cloud and homelab environments.',
    link: 'https://github.com/ivanfarias-tech/infrastructure-automation',
    meta: 'Terraform · GitHub Actions · Cloud',
    cmd: 'terraform apply',
    langColor: '#844fba',
  },
]

const stack = [
  { name: 'azure', color: '#bbf7d0' },
  { name: 'aws', color: '#bbf7d0' },
  { name: 'terraform', color: '#bbf7d0' },
  { name: 'proxmox', color: '#bbf7d0' },
  { name: 'linux', color: '#bbf7d0' },
  { name: 'windows server', color: '#bbf7d0' },
  { name: 'docker', color: '#bbf7d0' },
  { name: 'opnsense', color: '#bbf7d0' },
  { name: 'truenas', color: '#bbf7d0' },
  { name: 'git/github', color: '#bbf7d0' },
]

export { projects, stack }