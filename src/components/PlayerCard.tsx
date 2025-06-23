import { Card, CardContent } from "@/components/ui/card";
import { Player } from "@/data/mockData";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Card className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img
            src={player.photo}
            alt={player.name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg truncate">
              {player.name}
            </h3>
            <p className="text-gray-600 text-sm">{player.team}</p>
            <p className="text-gray-500 text-sm">{player.position}</p>
          </div>
          <div
            className={`px-2 py-1 rounded-full text-sm font-medium ${
              player.rating >= 9
                ? "bg-green-100 text-green-700"
                : player.rating >= 8.5
                  ? "bg-blue-100 text-blue-700"
                  : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {player.rating}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {player.goals}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Голы
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {player.assists}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Пасы
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {player.appearances}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Игры
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
