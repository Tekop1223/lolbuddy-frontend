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

          <div className="flex space-x-4">
              <div className="flex-shrink-0">
                  <RankCard
                      tier="Challenger"
                      rank=""
                      leaguePoints={2432}
                      wins={100}
                      losses={21}
                  />
              </div>
              <div className="flex-grow">
                  <RecentGamesCard
                      gameDuration={1445}
                      queueId={420}
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
          </div>
          <div className="mt-4">
              <p>Recent Champion Performance</p>
          </div>
      </div>
  );
}