'use client'

import { useSearchParams } from "next/navigation";

export default function HomePageClient({names}) {
  const searchParams = useSearchParams();
  const matches = searchParams.get('q') ? names.filter(name => name.includes(searchParams.get('q'))) : names;

  return (
    <main>{matches.map(name => <span key={name}>{name}</span>)}</main>
  );
}
