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
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-blue-500/20 overflow-hidden">
      <div className="px-6 py-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          ⭐ ТОП ИГРОКИ
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-slate-700 to-slate-800 border-blue-500/30">
            <TableHead className="text-blue-400 font-black">ИГРОК</TableHead>
            <TableHead className="text-blue-400 font-black">КОМАНДА</TableHead>
            <TableHead className="text-blue-400 font-black">ПОЗИЦИЯ</TableHead>
            <TableHead className="text-center w-16 text-blue-400 font-black">
              ⚽ ГОЛЫ
            </TableHead>
            <TableHead className="text-center w-16 text-blue-400 font-black">
              🎯 ПАСЫ
            </TableHead>
            <TableHead className="text-center w-16 text-blue-400 font-black">
              🏃 ИГРЫ
            </TableHead>
            <TableHead className="text-center w-20 text-blue-400 font-black">
              📈 РЕЙТИНГ
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player, index) => (
            <TableRow
              key={player.id}
              className={`hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300 hover:scale-[1.02] border-slate-700/50 ${
                index < 3
                  ? "bg-gradient-to-r from-blue-900/20 to-cyan-900/20"
                  : "bg-slate-800/50"
              }`}
            >
              <TableCell>
                <div className="flex items-center gap-4">
                  <img
                    src={player.photo}
                    alt={player.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/50"
                  />
                  <span className="font-black text-white text-lg">
                    {player.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-slate-300 font-bold">
                {player.team}
              </TableCell>
              <TableCell className="text-slate-300 font-bold">
                {player.position}
              </TableCell>
              <TableCell className="text-center">
                <span className="font-black text-2xl text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                  {player.goals}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className="font-black text-2xl text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                  {player.assists}
                </span>
              </TableCell>
              <TableCell className="text-center text-slate-300 font-bold text-lg">
                {player.appearances}
              </TableCell>
              <TableCell className="text-center">
                <span
                  className={`px-3 py-2 rounded-full text-sm font-black shadow-lg ${
                    player.rating >= 9
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      : player.rating >= 8.5
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                        : player.rating >= 8
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                          : "bg-gradient-to-r from-gray-500 to-slate-500 text-white"
                  }`}
                >
                  ⭐ {player.rating}
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
