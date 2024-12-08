interface otherSummonersProps {
    gameName: string;
    championName: string;
}

export function OtherSummonersCard({ gameName, championName }: otherSummonersProps) {
    return (
        <div className="p-2 m-2 bg-gray-800 shadow-md rounded-lg flex items-center space-x-4">
            <div className="relative">
                <img src={`/datadragon/14.23.1/img/champion/${championName}.png`} alt="Champion icon" className="w-16 h-16 rounded-lg"/>
            </div>
            <div>
                <h2 className="text-lg text-gray-200">{gameName}</h2>
            </div>
        </div>
    );
}
