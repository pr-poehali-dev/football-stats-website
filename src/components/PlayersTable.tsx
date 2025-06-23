import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { players } from "@/data/mockData";

const PlayersTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Топ игроки</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Игрок</TableHead>
            <TableHead>Команда</TableHead>
            <TableHead>Позиция</TableHead>
            <TableHead className="text-center w-16">Голы</TableHead>
            <TableHead className="text-center w-16">Пасы</TableHead>
            <TableHead className="text-center w-16">Игры</TableHead>
            <TableHead className="text-center w-20">Рейтинг</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id} className="hover:bg-gray-50">
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={player.photo}
                    alt={player.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900">
                    {player.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">{player.team}</TableCell>
              <TableCell className="text-gray-600">{player.position}</TableCell>
              <TableCell className="text-center font-medium text-gray-900">
                {player.goals}
              </TableCell>
              <TableCell className="text-center font-medium text-gray-900">
                {player.assists}
              </TableCell>
              <TableCell className="text-center text-gray-600">
                {player.appearances}
              </TableCell>
              <TableCell className="text-center">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    player.rating >= 9
                      ? "bg-green-100 text-green-700"
                      : player.rating >= 8.5
                        ? "bg-blue-100 text-blue-700"
                        : player.rating >= 8
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {player.rating}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlayersTable;
