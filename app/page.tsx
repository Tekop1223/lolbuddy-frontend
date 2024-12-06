import Image from "next/image";
import { SummonerCard } from "./components/Profile/Summoner";
import { RankCard } from "./components/Profile/Rank";
import { RecentGamesCard } from "./components/Profile/RecentGames";

export default function Home() {
  return (
    <div className="">  
    <div>
      <SummonerCard
        profileIconId={6759}
        gameName="Tekop"
        tagLine="tekop"
        summonerLevel={30}
        />
    </div>
    <div>
      <RankCard
        tier="Gold"
        rank="I"
        leaguePoints={100}
        wins={100}
        losses={100}
      />
    </div>
    <div>
      <p>recent champions performence</p>
    </div>
    <div>
    <RecentGamesCard
        gameDuration={1460}
        kills={999}
        deaths={0}
        assists={69}
        kda={0}
        champLevel={18}
        championId={48}
        championName="Trundle"
        visionScore={420}
      />
    </div>
    <div>
      Patch notes that reflects champions pool
    </div>
    </div>
  );
}
