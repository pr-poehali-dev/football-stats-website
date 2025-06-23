import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TournamentTable from "@/components/TournamentTable";
import PlayersTable from "@/components/PlayersTable";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import { players, teams } from "@/data/mockData";

const Index = () => {
  const featuredPlayers = players.slice(0, 3);
  const featuredTeams = teams.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-black text-white tracking-tight">
            ⚽ ФУТБОЛЬНАЯ СТАТИСТИКА
          </h1>
          <p className="text-green-100 mt-3 text-lg font-medium">
            🏆 Турнирные таблицы и статистика лучших игроков
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="tournament" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-slate-800 border-green-500/20">
            <TabsTrigger
              value="tournament"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white font-bold"
            >
              📊 СТАТИСТИКА ТУРНИРА
            </TabsTrigger>
            <TabsTrigger
              value="players"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white font-bold"
            >
              ⭐ СТАТИСТИКА ИГРОКОВ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tournament" className="space-y-8">
            {/* Featured Teams Section */}
            <section>
              <h2 className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                🏆 ТОП КОМАНДЫ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredTeams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </section>

            {/* Tournament Table */}
            <section>
              <TournamentTable />
            </section>
          </TabsContent>

          <TabsContent value="players" className="space-y-8">
            {/* Featured Players Section */}
            <section>
              <h2 className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ⚡ ЛУЧШИЕ ИГРОКИ
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredPlayers.map((player) => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
            </section>

            {/* Players Table */}
            <section>
              <PlayersTable />
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
