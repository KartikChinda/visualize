import PortfolioOverview from "@/app/components/Portfolio/PortfolioOverview";

export default async function PortfolioPage({
  params,
}: {
  params: { username: string };
}) {
  const userName = params.username;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/${userName}`
  );

  if (!response.ok) {
    return <p>User not found. </p>;
  }
  const userData = await response.json();
  return <PortfolioOverview userData={userData} />;
}
