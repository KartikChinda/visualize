import PortfolioOverview from "@/app/components/Portfolio/PortfolioOverview";
import { UserNotFound } from "@/app/components/Portfolio/UserNotFound";

export default async function PortfolioPage({
  params,
}: {
  params: { username: string };
}) {
  const userName = params.username;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/${userName}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    return <UserNotFound />;
  }
  const userData = await response.json();
  return <PortfolioOverview userData={userData} />;
}
