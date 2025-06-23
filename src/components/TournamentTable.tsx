import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teams } from "@/data/mockData";

const FormIndicator = ({ form }: { form: string[] }) => (
  <div className="flex gap-2">
    {form.map((result, index) => (
      <div
        key={index}
        className={`w-6 h-6 text-xs flex items-center justify-center rounded-full font-black shadow-lg transform hover:scale-110 transition-transform ${
          result === "W"
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
            : result === "D"
              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
              : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
        }`}
      >
        {result}
      </div>
    ))}
  </div>
);

const TournamentTable = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-green-500/20 overflow-hidden">
      <div className="px-6 py-6 bg-gradient-to-r from-green-600 to-emerald-600">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          ⚽ ТУРНИРНАЯ ТАБЛИЦА
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-slate-700 to-slate-800 border-green-500/30">
            <TableHead className="w-12 text-center text-green-400 font-black">
              #
            </TableHead>
            <TableHead className="text-green-400 font-black">КОМАНДА</TableHead>
            <TableHead className="text-center w-12 text-green-400 font-black">
              И
            </TableHead>
            <TableHead className="text-center w-12 text-green-400 font-black">
              В
            </TableHead>
            <TableHead className="text-center w-12 text-green-400 font-black">
              Н
            </TableHead>
            <TableHead className="text-center w-12 text-green-400 font-black">
              П
            </TableHead>
            <TableHead className="text-center w-16 text-green-400 font-black">
              З-П
            </TableHead>
            <TableHead className="text-center w-12 text-green-400 font-black">
              РМ
            </TableHead>
            <TableHead className="text-center w-12 text-green-400 font-black">
              О
            </TableHead>
            <TableHead className="w-24 text-green-400 font-black">
              ФОРМА
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow
              key={team.id}
              className={`hover:bg-gradient-to-r hover:from-green-900/30 hover:to-emerald-900/30 transition-all duration-300 hover:scale-[1.02] border-slate-700/50 ${
                index < 4
                  ? "bg-gradient-to-r from-green-900/20 to-emerald-900/20"
                  : "bg-slate-800/50"
              }`}
            >
              <TableCell
                className={`text-center font-black text-lg ${
                  index < 4 ? "text-green-400" : "text-white"
                }`}
              >
                {team.position}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-green-500/50"
                  />
                  <span className="font-black text-white text-lg">
                    {team.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-center text-slate-300 font-bold">
                {team.played}
              </TableCell>
              <TableCell className="text-center text-green-400 font-black">
                {team.won}
              </TableCell>
              <TableCell className="text-center text-yellow-400 font-bold">
                {team.drawn}
              </TableCell>
              <TableCell className="text-center text-red-400 font-bold">
                {team.lost}
              </TableCell>
              <TableCell className="text-center text-white font-bold">
                <span className="text-green-400">{team.goalsFor}</span>-
                <span className="text-red-400">{team.goalsAgainst}</span>
              </TableCell>
              <TableCell
                className={`text-center font-black text-lg ${
                  team.goalDifference > 0
                    ? "text-green-400"
                    : team.goalDifference < 0
                      ? "text-red-400"
                      : "text-yellow-400"
                }`}
              >
                {team.goalDifference > 0 ? "+" : ""}
                {team.goalDifference}
              </TableCell>
              <TableCell className="text-center font-black text-xl text-yellow-400">
                {team.points}
              </TableCell>
              <TableCell>
                <FormIndicator form={team.form} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TournamentTable;
