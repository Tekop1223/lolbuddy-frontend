

interface RecentGamesProps {
    //info.
    gameDuration: number;
    queueId: number;
    //info.participants.
    kills: number;
    deaths: number;
    assists: number;
    kda: number;
    champLevel: number;
    championId: number;
    championName: string;
    creepScore: number;
    visionScore: number;
    // //datadragon
    RunesName: string;
    SecRunesName: string;
}
// // queueId = gametype 
// 400 = Normal Draft Pick, 420 = Ranked Solo/Duo, 430 = Normal blind pick, 440 = Ranked Flex, 450 = ARAM,
const getGameType = (queueId: number): string => {
    switch(queueId) {
        case 400:
            return "Normal Draft Pick";
        case 420:
            return "Ranked";
        case 430:
            return "Normal blind pick";
        case 440:
            return "Ranked Flex";
        case 450:
            return "ARAM";
        default:
            return "Unknown";
    }
}

const CSPerMinute = (creepScore: number, gameDuration: number): number => {
    return Math.round((creepScore / (gameDuration / 60)) * 100) / 100;
}


// // teamId = side of the map
// 100 = blue side, 200 = red side


const formatGameDuration = (gameDuration: number): string => {
    const minutes = Math.floor(gameDuration / 60);
    const seconds = gameDuration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


export function RecentGamesCard ({gameDuration, queueId, kills, deaths, assists, kda, champLevel, championId, championName, visionScore, creepScore, RunesName, SecRunesName}: RecentGamesProps) {
    const gameType = getGameType(queueId);
    const formattedGameDuration = formatGameDuration(gameDuration);
    const CSPerminute = CSPerMinute(creepScore, gameDuration);
    return (
    <div className="p-4 m-4 bg-recentGames-color shadow-md rounded-lg">
        <div className="p-2 m-2 bg-container-color shadow-md rounded-lg flex flex-row" >
            <div className="text-m text-bold">Match history</div>
        </div>
    <div className="p-4 m-4 bg-container-color shadow-md rounded-lg flex items-center space-x-4">
        <div>
            <p className="text-xl text-bold text-sky-500"> Victory</p>
            <p className="text-m text-bold text-white">{gameType}</p>
            <p className="text-sm text-gray-400 text-center">{formattedGameDuration}</p>
        </div>
        <div className="relative">
          
            <img src={`/datadragon/14.23.1/img/champion/${championName}.png`} alt="Champion icon" className="w-16 h-16 rounded-lg"/>
            <div className="absolute bottom-0 left-0 bg-black text-gray-200 text-xs rounded px-1">
                {champLevel}
            </div>
        </div>
        <div>      
        <h2 className="text-lg text-gray-200">{championName}</h2>
            <p className="text-sm text-gray-400">{kills} / {deaths} / {assists}</p>
            <p className="text-sm text-gray-400">{kda} KDA</p>
            <p className="text-sm text-gray-400">{creepScore} CS ({CSPerminute})</p>
            <p className="text-sm text-gray-400">Vision Score: {visionScore}</p>
        </div>
    
    </div>
    </div>
    );
}