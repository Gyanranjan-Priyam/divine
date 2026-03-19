// Subdomain data type
interface SubdomainData {
  emoji: string;
  name: string;
}

// This is a fallback for generic subdomains that aren't ddc or dhss
// Since ddc and dhss have dedicated folders in app/s/, they won't hit this
export async function getSubdomainData(subdomain: string): Promise<SubdomainData | null> {
  // Return null for unknown subdomains - will trigger 404
  return null;
}
