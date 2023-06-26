export type Status = {
  id: number
  description: string
}

export const statuses: Status[] = [
  {
    id: 1,
    description: 'In Queue',
  },
  {
    id: 2,
    description: 'Processing',
  },
  {
    id: 3,
    description: 'Accepted',
  },
  {
    id: 4,
    description: 'Wrong Answer',
  },
  {
    id: 5,
    description: 'Time Limit Exceeded',
  },
  {
    id: 6,
    description: 'Compilation Error',
  },
  {
    id: 7,
    description: 'Runtime Error (SIGSEGV)',
  },
  {
    id: 8,
    description: 'Runtime Error (SIGXFSZ)',
  },
  {
    id: 9,
    description: 'Runtime Error (SIGFPE)',
  },
  {
    id: 10,
    description: 'Runtime Error (SIGABRT)',
  },
  {
    id: 11,
    description: 'Runtime Error (NZEC)',
  },
  {
    id: 12,
    description: 'Runtime Error (Other)',
  },
  {
    id: 13,
    description: 'Internal Error',
  },
  {
    id: 14,
    description: 'Exec Format Error',
  },
]

export function getStatusHeaderOptions(token: any) {
  return {
    method: 'GET',
    url: process.env.NEXT_PUBLIC_RAPID_API_URL + '/' + token,
    params: {base64_encoded: 'true', fields: '*'},
    headers: {
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  }
}
