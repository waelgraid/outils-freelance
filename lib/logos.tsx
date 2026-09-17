// Logos inline — aucune requête externe, toujours affichés
export const BRAND_LOGOS: Record<string, JSX.Element> = {
  indy: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#6C5CE7"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">In</text>
    </svg>
  ),
  freebe: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0061FF"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Fb</text>
    </svg>
  ),
  abby: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#00C48C"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Ab</text>
    </svg>
  ),
  qonto: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#FF5A50"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Qt</text>
    </svg>
  ),
  shine: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#1B4332"/>
      <text x="20" y="26" textAnchor="middle" fill="#4ADE80" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">Sh</text>
    </svg>
  ),
  pennylane: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#1A1A2E"/>
      <text x="20" y="26" textAnchor="middle" fill="#F4C430" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">PL</text>
    </svg>
  ),
  alan: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#00BCD4"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">Al</text>
    </svg>
  ),
  malakoff: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#7B3F00"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">MH</text>
    </svg>
  ),
  harmonie: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#2E7D32"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">HM</text>
    </svg>
  ),
}

export const BRAND_COLORS: Record<string, { bg: string; text: string; initials: string }> = {
  indy:       { bg: '#6C5CE7', text: '#fff', initials: 'In' },
  freebe:     { bg: '#0061FF', text: '#fff', initials: 'Fb' },
  abby:       { bg: '#00C48C', text: '#fff', initials: 'Ab' },
  qonto:      { bg: '#FF5A50', text: '#fff', initials: 'Qt' },
  shine:      { bg: '#1B4332', text: '#4ADE80', initials: 'Sh' },
  pennylane:  { bg: '#1A1A2E', text: '#F4C430', initials: 'PL' },
  alan:       { bg: '#00BCD4', text: '#fff', initials: 'Al' },
  malakoff:   { bg: '#7B3F00', text: '#fff', initials: 'MH' },
  harmonie:   { bg: '#2E7D32', text: '#fff', initials: 'HM' },
}
