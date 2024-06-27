import HomePageClient from "./page.client";

export const dynamic = "force-static";

export const revalidate = 604800;

const getNames = async () => ["Alice", "Bob", "Charlie"];

export default async function HomePage() {
  const names = await getNames();

  return (
    <HomePageClient names={names} />
  );
}
